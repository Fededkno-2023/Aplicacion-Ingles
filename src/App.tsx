import React, { useState } from 'react';
import { ActiveScreen, ScreenTab } from './types';
import { TopAppBar } from './components/TopAppBar';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { JourneyScreen } from './components/JourneyScreen';
import { PracticeScreen } from './components/PracticeScreen';
import { MissionCompleteScreen } from './components/MissionCompleteScreen';
import { AwardsScreen } from './components/AwardsScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { sound } from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>('home');
  const [stars, setStars] = useState<number>(120);
  const [streakDays] = useState<number>(5);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [reviewModalTopic, setReviewModalTopic] = useState<string | null>(null);

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      sound.enabled = next;
      return next;
    });
  };

  const handleAddStars = (amount: number) => {
    setStars((prev) => prev + amount);
  };

  const handleTabSelect = (tab: ScreenTab) => {
    if (tab === 'journey') {
      setCurrentScreen('journey');
    } else if (tab === 'practice') {
      setCurrentScreen('practice');
    } else if (tab === 'awards') {
      setCurrentScreen('awards');
    } else if (tab === 'profile') {
      setCurrentScreen('profile');
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#001c3b] flex flex-col items-center selection:bg-[#64f9bc]">
      {/* Quick Screen Preview Switcher Header for direct 1-click preview of all 4 image screens */}
      <div className="w-full max-w-[420px] bg-slate-900 text-slate-100 px-3 py-1.5 flex items-center justify-between text-[11px] font-bold border-b border-slate-700 shadow-xs z-50">
        <span className="text-amber-400 font-extrabold flex items-center gap-1">
          <span className="material-symbols-outlined text-[14px]">photo_camera</span>
          Screens:
        </span>
        <div className="flex items-center gap-1 overflow-x-auto py-0.5">
          <button
            onClick={() => {
              sound.playClick();
              setCurrentScreen('home');
            }}
            className={`px-2 py-0.5 rounded-md transition-all whitespace-nowrap ${
              currentScreen === 'home'
                ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            1. Home (Img 3)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCurrentScreen('journey');
            }}
            className={`px-2 py-0.5 rounded-md transition-all whitespace-nowrap ${
              currentScreen === 'journey'
                ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            2. Journey (Img 1)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCurrentScreen('practice');
            }}
            className={`px-2 py-0.5 rounded-md transition-all whitespace-nowrap ${
              currentScreen === 'practice'
                ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            3. Practice (Img 5)
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setCurrentScreen('complete');
            }}
            className={`px-2 py-0.5 rounded-md transition-all whitespace-nowrap ${
              currentScreen === 'complete'
                ? 'bg-blue-600 text-white font-extrabold shadow-xs'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            4. Result (Img 7)
          </button>
        </div>
      </div>

      {/* Main Mobile App Frame (390-420px standard viewport) */}
      <div className="w-full max-w-[420px] min-h-screen flex flex-col bg-[#FFFBF5] relative shadow-xl border-x border-slate-200/50">
        {/* Top App Bar */}
        <TopAppBar
          currentScreen={currentScreen}
          onNavigate={setCurrentScreen}
          stars={stars}
          streakDays={streakDays}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          showBack={currentScreen === 'practice' || currentScreen === 'complete'}
          onBack={() => setCurrentScreen('journey')}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1 flex flex-col">
          {currentScreen === 'home' && (
            <HomeScreen
              onStartJourney={() => setCurrentScreen('journey')}
              onStartPractice={() => setCurrentScreen('practice')}
            />
          )}

          {currentScreen === 'journey' && (
            <JourneyScreen
              onStartPractice={(_id) => setCurrentScreen('practice')}
              stars={stars}
            />
          )}

          {currentScreen === 'practice' && (
            <PracticeScreen
              onBack={() => setCurrentScreen('journey')}
              onComplete={() => setCurrentScreen('complete')}
              onAddStars={handleAddStars}
              soundEnabled={soundEnabled}
              onToggleSound={toggleSound}
            />
          )}

          {currentScreen === 'complete' && (
            <MissionCompleteScreen
              onContinueAdventure={() => setCurrentScreen('journey')}
              onBackToJourney={() => setCurrentScreen('journey')}
              onReviewTip={(topic) => setReviewModalTopic(topic)}
            />
          )}

          {currentScreen === 'awards' && <AwardsScreen stars={stars} />}

          {currentScreen === 'profile' && (
            <ProfileScreen
              stars={stars}
              streakDays={streakDays}
              soundEnabled={soundEnabled}
              onToggleSound={toggleSound}
            />
          )}
        </main>

        {/* Bottom Navigation */}
        <BottomNav activeScreen={currentScreen} onSelectTab={handleTabSelect} />

        {/* Friendly Review Tip Modal */}
        {reviewModalTopic && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-5 max-w-[340px] w-full border-2 border-amber-300 shadow-2xl animate-scaleIn text-center">
              <span className="text-4xl block mb-2">💡</span>
              <h3 className="font-headline text-[18px] font-bold text-[#001c3b]">
                Buddy's Quick Tip
              </h3>
              <p className="text-[13px] font-bold text-[#0058be] mt-0.5">
                {reviewModalTopic}
              </p>
              <div className="my-3 p-3 bg-amber-50 rounded-2xl text-[13px] font-semibold text-amber-900 text-left border border-amber-200">
                {reviewModalTopic === 'Verb To Be' ? (
                  <>
                    <p className="mb-1 font-bold">Remember the magic trio:</p>
                    <p>• <strong>I</strong> ➜ <strong>am</strong> (I am happy!)</p>
                    <p>• <strong>He / She / It</strong> ➜ <strong>is</strong> (It is an apple!)</p>
                    <p>• <strong>You / We / They</strong> ➜ <strong>are</strong> (We are friends!)</p>
                  </>
                ) : (
                  <>
                    <p className="mb-1 font-bold">Making simple sentences:</p>
                    <p>Start with <em>Who</em> (I, You, Buddy), then <em>Action</em> (like, see, have), and what you see!</p>
                    <p className="mt-1 text-emerald-700">"I like red apples!"</p>
                  </>
                )}
              </div>
              <button
                onClick={() => {
                  sound.playClick();
                  setReviewModalTopic(null);
                }}
                className="w-full py-2.5 rounded-xl tactile-btn-blue font-headline text-[15px] font-bold"
              >
                Got it, Buddy! 👍
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
