import type { UserInfo } from '../types';

const COLLECTION_ENDPOINT = 'https://hook.us1.make.com/amijy2z6nxgwwtt3gbzjaf5sow8voh0x';

export async function collectUserData(userInfo: UserInfo): Promise<void> {
  try {
    const payload = {
      ...userInfo,
      timestamp: new Date().toISOString(),
      source: 'StyleScribe Web App'
    };

    const response = await fetch(COLLECTION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Failed to collect user data:', error);
    // Silent fail to prevent disrupting the main flow
  }
}