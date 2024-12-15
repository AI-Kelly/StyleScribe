import type { UserInfo } from '../types';

const MAKE_WEBHOOK_URL = 'https://hook.us1.make.com/t6jjihbxe99qfpgdb3oxerd98nxjmrte';

export interface MakeWebhookResponse {
  toneGuide: string;
  success: boolean;
  error?: string;
}

export async function analyzeWriting(text: string, userInfo: UserInfo): Promise<MakeWebhookResponse> {
  try {
    const response = await fetch(MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        text,
        firstName: userInfo.firstName,
        email: userInfo.email,
        timestamp: new Date().toISOString(),
        wordCount: text.trim().split(/\s+/).length
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data;
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const textResponse = await response.text();
      data = { result: textResponse };
    }

    console.log('Make.com response:', data);

    let toneGuide = '';
    
    if (typeof data === 'string') {
      toneGuide = data;
    } else if (typeof data === 'object' && data !== null) {
      toneGuide = data.toneGuide || 
                  data.result || 
                  data.analysis || 
                  data.output || 
                  data.response || 
                  data.text || 
                  '';
    }

    if (!toneGuide) {
      console.error('Response format:', data);
      throw new Error('No valid tone guide found in the response');
    }

    return {
      success: true,
      toneGuide: toneGuide.toString()
    };
  } catch (error) {
    console.error('Analysis error:', error);
    return {
      success: false,
      toneGuide: '',
      error: error instanceof Error 
        ? error.message 
        : 'Failed to process the analysis response'
    };
  }
}