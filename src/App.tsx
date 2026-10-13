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
import { ReviewTipModal } from './components/common/ReviewTipModal';
import { OfflineStatusBanner } from './components/common/OfflineStatusBanner';
import { useSound } from './hooks/useSound';
import { usePlayerStats } from './hooks/usePlayerStats';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ActiveScreen>('home');
  const [previousScreen, setPreviousScreen] = useState<ActiveScreen>('home');
  const [reviewModalTopic, setReviewModalTopic] = useState<string | null>(null);

  const { soundEnabled, toggleSound } = useSound(true);
  const { stars, streakDays, addStars } = usePlayerStats({
    initialStars: 120,
    initialStreakDays: 5,
  });

  const navigateTo = (screen: ActiveScreen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  const handleBack = () => {
    if (currentScreen === 'practice' || currentScreen === 'complete') {
      navigateTo('journey');
    } else {
      navigateTo('home');
    }
  };

  const handleTabSelect = (tab: ScreenTab) => {
    switch (tab) {
      case 'journey':
        navigateTo('journey');
        break;
      case 'practice':
        navigateTo('practice');
        break;
      case 'awards':
        navigateTo('awards');
        break;
      case 'profile':
        navigateTo('profile');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5] text-[#001c3b] flex flex-col items-center selection:bg-[#64f9bc]">
      {/* Main Mobile App Frame */}
      <div className="w-full max-w-[420px] min-h-screen flex flex-col bg-[#FFFBF5] relative shadow-xl border-x border-slate-200/50">
        {/* Connection status banner (calm, clear feedback when offline) */}
        <OfflineStatusBanner />

        {/* Top App Bar with back button on all non-home screens */}
        <TopAppBar
          currentScreen={currentScreen}
          onNavigate={navigateTo}
          stars={stars}
          streakDays={streakDays}
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          onBack={handleBack}
        />

        {/* Dynamic Screen View */}
        <main className="flex-1 flex flex-col">
          {currentScreen === 'home' && (
            <HomeScreen onStartJourney={() => navigateTo('journey')} />
          )}

          {currentScreen === 'journey' && (
            <JourneyScreen
              onStartPractice={(_id) => navigateTo('practice')}
              stars={stars}
            />
          )}

          {currentScreen === 'practice' && (
            <PracticeScreen
              onBack={() => navigateTo('journey')}
              onComplete={() => navigateTo('complete')}
              onAddStars={addStars}
              soundEnabled={soundEnabled}
              onToggleSound={toggleSound}
            />
          )}

          {currentScreen === 'complete' && (
            <MissionCompleteScreen
              onContinueAdventure={() => navigateTo('journey')}
              onBackToJourney={() => navigateTo('journey')}
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

        {/* Bottom Navigation: Simple 4 tabs without hidden menus */}
        <BottomNav activeScreen={currentScreen} onSelectTab={handleTabSelect} />

        {/* Friendly Review Tip Modal */}
        {reviewModalTopic && (
          <ReviewTipModal
            topic={reviewModalTopic}
            onClose={() => setReviewModalTopic(null)}
          />
        )}
      </div>
    </div>
  );
}
