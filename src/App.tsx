import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { TextEditor } from './components/TextEditor';
import { UserInfoForm } from './components/UserInfo/UserInfoForm';
import { AnalysisButton } from './components/Analysis/AnalysisButton';
import { LoadingState } from './components/Analysis/LoadingState';
import { ErrorState } from './components/Analysis/ErrorState';
import { AnalysisOutput } from './components/Analysis/AnalysisOutput';
import { VideoPlayer, VideoState } from './components/Video/VideoPlayer';
import { useAnalysis } from './hooks/useAnalysis';
import { useUserInfo } from './hooks/useUserInfo';

export default function App() {
  const [text, setText] = useState('');
  const { error, result, analyze } = useAnalysis();
  const { userInfo, errors, handleChange, validate } = useUserInfo();
  const [videoState, setVideoState] = useState<VideoState>('initial');

  const handleAnalyze = async () => {
    if (validate()) {
      setVideoState('submitted');
      await analyze(text, userInfo);
      setVideoState('completed');
    }
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-6">
          <Header />

          <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100">
                <UserInfoForm
                  userInfo={userInfo}
                  onChange={handleChange}
                  errors={errors}
                />
                <TextEditor
                  value={text}
                  onChange={setText}
                  error={error || undefined}
                />
                <div className="mt-6">
                  <AnalysisButton
                    onClick={handleAnalyze}
                    isLoading={result.status === 'loading'}
                  />
                </div>
              </div>

              {result.status === 'loading' && <LoadingState />}
              
              {result.status === 'error' && result.error && (
                <ErrorState error={result.error} />
              )}
              
              {result.status === 'success' && result.toneGuide && (
                <AnalysisOutput toneGuide={result.toneGuide} />
              )}
            </div>

            <div className="lg:sticky lg:top-6 h-fit">
              <VideoPlayer state={videoState} />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}