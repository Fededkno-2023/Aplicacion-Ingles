import React from 'react';
import { sound } from '../../utils/audio';

interface ReviewTipModalProps {
  topic: string;
  onClose: () => void;
}

export const ReviewTipModal: React.FC<ReviewTipModalProps> = ({ topic, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl p-5 max-w-[340px] w-full border-2 border-amber-300 shadow-2xl text-center">
        <span className="text-4xl block mb-2">💡</span>
        <h3 className="font-headline text-[18px] font-bold text-[#001c3b]">
          Buddy's Quick Tip
        </h3>
        <p className="text-[13px] font-bold text-[#0058be] mt-0.5">{topic}</p>
        
        <div className="my-3 p-3 bg-amber-50 rounded-2xl text-[13px] font-semibold text-amber-900 text-left border border-amber-200">
          {topic === 'Verb To Be' ? (
            <>
              <p className="mb-1 font-bold">Remember the magic trio:</p>
              <p>• <strong>I</strong> ➜ <strong>am</strong> (I am happy!)</p>
              <p>• <strong>He / She / It</strong> ➜ <strong>is</strong> (It is an apple!)</p>
              <p>• <strong>You / We / They</strong> ➜ <strong>are</strong> (We are friends!)</p>
            </>
          ) : (
            <>
              <p className="mb-1 font-bold">Making simple sentences:</p>
              <p>
                Start with <em>Who</em> (I, You, Buddy), then <em>Action</em> (like, see, have), and what you see!
              </p>
              <p className="mt-1 text-emerald-700">"I like red apples!"</p>
            </>
          )}
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full py-2.5 rounded-xl tactile-btn-blue font-headline text-[15px] font-bold"
        >
          Got it, Buddy! 👍
        </button>
      </div>
    </div>
  );
};
