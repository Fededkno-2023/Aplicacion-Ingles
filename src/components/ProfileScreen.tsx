import React, { useState } from 'react';
import { StartSchoolLogo } from './StartSchoolLogo';
import { BUDDY_MASCOT_IMAGE } from '../data/mockData';
import { sound } from '../utils/audio';

interface ProfileScreenProps {
  stars: number;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  stars,
  streakDays,
  soundEnabled,
  onToggleSound,
}) => {
  const [studentName, setStudentName] = useState('Leo Martinez');
  const [dailyGoal, setDailyGoal] = useState('20');
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSaveSuccess(false);

    // Validation with specific, actionable feedback
    if (!studentName.trim()) {
      setErrorMessage('Por favor escribe el nombre del estudiante para que aparezca en sus diplomas.');
      sound.playTryAgain();
      return;
    }

    const goalNum = parseInt(dailyGoal, 10);
    if (isNaN(goalNum) || goalNum <= 0) {
      setErrorMessage('La meta diaria de estrellas debe ser al menos 5 (ejemplo: 20 estrellas).');
      sound.playTryAgain();
      return;
    }

    // Visual processing state
    setIsSaving(true);
    sound.playClick();

    setTimeout(() => {
      setIsSaving(false);
      setSaveSuccess(true);
      sound.playCorrect();
      setTimeout(() => setSaveSuccess(false), 3500);
    }, 600);
  };

  return (
    <div className="flex-1 flex flex-col px-4 pt-3 pb-28 max-w-[420px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <StartSchoolLogo size="sm" />
        <span className="text-[12px] font-bold text-slate-500">
          ID: #ST-9024
        </span>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-4 border-2 border-[#d5e3ff] tactile-card shadow-sm mt-1 mb-4 flex items-center gap-3.5">
        <div className="relative w-18 h-18 rounded-2xl bg-gradient-to-b from-[#FFF5E6] to-[#FFE8CC] border-2 border-[#FDE0B4] flex items-center justify-center overflow-hidden shrink-0 shadow-2xs">
          <img
            src={BUDDY_MASCOT_IMAGE}
            alt={studentName}
            className="w-16 h-16 object-contain"
          />
          <div className="absolute bottom-0 right-0 bg-[#0058be] text-white p-0.5 rounded-tl-md text-[10px]">
            🦊
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <span className="text-[11px] font-extrabold text-[#0058be] tracking-wider uppercase block truncate">
            Cadet Explorer
          </span>
          <h3 className="font-headline text-[20px] font-bold text-[#001c3b] leading-tight truncate">
            {studentName}
          </h3>
          <p className="text-[12px] font-semibold text-slate-500 mt-0.5">
            Start School • Primary Class A
          </p>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-3 gap-2.5 mb-4">
        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">⭐</span>
          <div className="font-headline text-[18px] font-bold text-[#765700] mt-0.5">
            {stars}
          </div>
          <span className="text-[11px] font-bold text-slate-500">Stars</span>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">🔥</span>
          <div className="font-headline text-[18px] font-bold text-orange-600 mt-0.5">
            {streakDays} Days
          </div>
          <span className="text-[11px] font-bold text-slate-500">Streak</span>
        </div>

        <div className="bg-white rounded-2xl p-3 border border-[#d5e3ff] text-center shadow-2xs">
          <span className="text-xl">🗺️</span>
          <div className="font-headline text-[18px] font-bold text-[#0058be] mt-0.5">
            Lvl 1
          </div>
          <span className="text-[11px] font-bold text-slate-500">World</span>
        </div>
      </div>

      {/* Simplified, High-Usability Form (Min fields, correct keyboard, placeholder examples) */}
      <section className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-4">
        <h4 className="font-headline text-[16px] font-bold text-[#001c3b] mb-1">
          Datos del Alumno
        </h4>
        <p className="text-[12px] text-slate-500 mb-3">
          Personaliza el nombre y la meta diaria para los diplomas de Start School.
        </p>

        <form onSubmit={handleSaveProfile} className="flex flex-col gap-3">
          {/* Campo 1: Nombre */}
          <div>
            <label htmlFor="student-name" className="block text-[13px] font-extrabold text-[#001c3b] mb-1">
              Nombre del estudiante
            </label>
            <input
              id="student-name"
              type="text"
              autoComplete="name"
              value={studentName}
              onChange={(e) => {
                setStudentName(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="Ej: Leo Martinez"
              className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#0058be] focus:outline-none text-[15px] font-bold text-[#001c3b] bg-slate-50 focus:bg-white transition-colors"
            />
          </div>

          {/* Campo 2: Meta diaria de estrellas */}
          <div>
            <label htmlFor="daily-goal" className="block text-[13px] font-extrabold text-[#001c3b] mb-1">
              Meta diaria de estrellas ⭐
            </label>
            <input
              id="daily-goal"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min="5"
              max="200"
              value={dailyGoal}
              onChange={(e) => {
                setDailyGoal(e.target.value);
                if (errorMessage) setErrorMessage(null);
              }}
              placeholder="Ej: 20"
              className="w-full min-h-[46px] px-3.5 py-2.5 rounded-xl border-2 border-slate-200 focus:border-[#0058be] focus:outline-none text-[15px] font-bold text-[#001c3b] bg-slate-50 focus:bg-white transition-colors"
            />
          </div>

          {/* Feedback de error específico */}
          {errorMessage && (
            <div role="alert" className="p-3 bg-red-50 border border-red-200 rounded-xl text-[12px] font-bold text-red-700 flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-red-600 mt-0.5">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Feedback de éxito visual */}
          {saveSuccess && (
            <div role="status" className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-[12px] font-bold text-emerald-800 flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-emerald-600">check_circle</span>
              <span>¡Perfil guardado con éxito! Tu progreso está actualizado.</span>
            </div>
          )}

          {/* Botón de guardar con feedback de carga */}
          <button
            type="submit"
            disabled={isSaving}
            className="w-full min-h-[48px] py-3 px-4 rounded-xl tactile-btn-blue font-headline text-[15px] font-extrabold flex items-center justify-center gap-2 transition-all disabled:opacity-75 touch-manipulation active:scale-[0.98]"
          >
            {isSaving ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Guardando cambios...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-[18px]">save</span>
                <span>Guardar cambios</span>
              </>
            )}
          </button>
        </form>
      </section>

      {/* Learning Settings */}
      <div className="bg-white rounded-3xl p-4 border border-[#d5e3ff] shadow-xs mb-4">
        <h4 className="font-headline text-[16px] font-bold text-[#001c3b] mb-3">
          Configuración rápida
        </h4>

        <div className="flex flex-col gap-3">
          {/* Audio toggle con tamaño táctil accesible */}
          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#0058be] text-[22px]">
                volume_up
              </span>
              <div>
                <span className="font-headline text-[14px] font-bold text-[#001c3b] block">
                  Sonidos y Voz
                </span>
                <span className="text-[11px] text-slate-500">
                  Pronunciación en inglés y efectos auditivos
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onToggleSound();
                sound.playClick();
              }}
              className={`min-w-[48px] min-h-[44px] px-1 flex items-center justify-center rounded-full transition-colors`}
              aria-label={soundEnabled ? 'Desactivar sonido' : 'Activar sonido'}
            >
              <div
                className={`w-12 h-6 rounded-full relative p-0.5 transition-colors ${
                  soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white shadow-xs transition-transform ${
                    soundEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </div>
            </button>
          </div>

          <div className="border-t border-slate-100 pt-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-amber-600 text-[22px]">
                translate
              </span>
              <div>
                <span className="font-headline text-[14px] font-bold text-[#001c3b] block">
                  Idioma de apoyo
                </span>
                <span className="text-[11px] text-slate-500">Español (Start School)</span>
              </div>
            </div>
            <span className="text-[12px] font-extrabold text-[#0058be] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              ES ⇄ EN
            </span>
          </div>
        </div>
      </div>

      {/* Parent / Teacher Note */}
      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-[12px] text-amber-900 leading-relaxed">
        <strong className="block font-headline text-[13px] text-amber-950 mb-0.5">
          👨‍👩‍👧 Nota para Familias y Docentes:
        </strong>
        El currículo de Start School promueve la adquisición natural del inglés con refuerzo positivo constante y sin penalizaciones.
      </div>
    </div>
  );
};
