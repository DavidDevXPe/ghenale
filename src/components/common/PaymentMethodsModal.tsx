import React, { useState } from 'react';
import { BUSINESS_INFO } from '../../data/business';

interface PaymentMethodsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PaymentMethodsModal: React.FC<PaymentMethodsModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Scrim */}
      <div
        className="fixed inset-0 bg-primary/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-lg bg-ivory rounded-2xl shadow-modal overflow-hidden border border-border-hairline flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-primary text-ivory p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-primary font-bold shadow-sm">
              <span className="material-symbols-outlined text-xl">payments</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-ivory leading-snug">
                Medios de Pago Locales
              </h3>
              <p className="text-xs text-gold">Cuentas oficiales de Giovanna Pastelería</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-ivory/70 hover:bg-white/10 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-espresso">
          {/* Booking Notice */}
          <div className="p-3.5 rounded-xl bg-linen border border-secondary-soft/40 flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-lg shrink-0 mt-0.5">info</span>
            <p className="text-xs text-espresso/80 leading-relaxed">
              Para garantizar tu fecha en el horno, solicitamos un <strong>abono mínimo del 50%</strong>. El saldo se cancela contraentrega al recibir tu torta o recoger en taller.
            </p>
          </div>

          {/* 1. Yape */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border-hairline space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#742384] text-white flex items-center justify-center font-bold text-xs">
                  Y
                </span>
                <span className="font-bold text-sm text-espresso">Yape</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  Inmediato
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.payments.yape.number, 'yape')}
                className="px-2.5 py-1 rounded-md bg-secondary-fixed text-primary text-xs font-bold hover:bg-secondary-fixed/80 active:scale-95 transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">
                  {copiedField === 'yape' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedField === 'yape' ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
            <div className="bg-ivory p-3 rounded-lg border border-border-hairline/60 flex items-center justify-between">
              <div>
                <span className="font-mono text-base font-bold text-espresso block">
                  {BUSINESS_INFO.payments.yape.number}
                </span>
                <span className="text-xs text-espresso/60">
                  Titular: {BUSINESS_INFO.payments.yape.titular}
                </span>
              </div>
              <span className="text-[11px] text-espresso/60 italic hidden sm:inline">
                {BUSINESS_INFO.payments.yape.note}
              </span>
            </div>
          </div>

          {/* 2. Plin */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border-hairline space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-[#00D4B2] text-black flex items-center justify-center font-bold text-xs">
                  P
                </span>
                <span className="font-bold text-sm text-espresso">Plin</span>
                <span className="text-[10px] text-espresso/60">Interbank, BBVA, Scotiabank</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.payments.plin.number, 'plin')}
                className="px-2.5 py-1 rounded-md bg-secondary-fixed text-primary text-xs font-bold hover:bg-secondary-fixed/80 active:scale-95 transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">
                  {copiedField === 'plin' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedField === 'plin' ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
            <div className="bg-ivory p-3 rounded-lg border border-border-hairline/60">
              <span className="font-mono text-base font-bold text-espresso block">
                {BUSINESS_INFO.payments.plin.number}
              </span>
              <span className="text-xs text-espresso/60">
                Titular: {BUSINESS_INFO.payments.plin.titular}
              </span>
            </div>
          </div>

          {/* 3. BCP */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border-hairline space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-800 text-lg">account_balance</span>
                <span className="font-bold text-sm text-espresso">{BUSINESS_INFO.payments.bcp.bank}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.payments.bcp.account, 'bcp-acc')}
                className="px-2.5 py-1 rounded-md bg-secondary-fixed text-primary text-xs font-bold hover:bg-secondary-fixed/80 active:scale-95 transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">
                  {copiedField === 'bcp-acc' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedField === 'bcp-acc' ? 'Copiado' : 'Copiar Cuenta'}</span>
              </button>
            </div>
            <div className="bg-ivory p-3 rounded-lg border border-border-hairline/60 space-y-1">
              <div>
                <span className="text-[10px] text-espresso/60 uppercase block">Número de Cuenta:</span>
                <span className="font-mono font-bold text-espresso">{BUSINESS_INFO.payments.bcp.account}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] text-espresso/60 uppercase block">Código Interbancario (CCI):</span>
                  <span className="font-mono text-xs text-espresso/80">{BUSINESS_INFO.payments.bcp.cci}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(BUSINESS_INFO.payments.bcp.cci, 'bcp-cci')}
                  className="text-xs text-secondary hover:underline"
                >
                  {copiedField === 'bcp-cci' ? 'Copiado!' : 'Copiar CCI'}
                </button>
              </div>
            </div>
          </div>

          {/* 4. BBVA */}
          <div className="p-4 rounded-xl bg-surface-container-low border border-border-hairline space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-900 text-lg">account_balance</span>
                <span className="font-bold text-sm text-espresso">{BUSINESS_INFO.payments.bbva.bank}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(BUSINESS_INFO.payments.bbva.account, 'bbva-acc')}
                className="px-2.5 py-1 rounded-md bg-secondary-fixed text-primary text-xs font-bold hover:bg-secondary-fixed/80 active:scale-95 transition-all flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-xs">
                  {copiedField === 'bbva-acc' ? 'check' : 'content_copy'}
                </span>
                <span>{copiedField === 'bbva-acc' ? 'Copiado' : 'Copiar Cuenta'}</span>
              </button>
            </div>
            <div className="bg-ivory p-3 rounded-lg border border-border-hairline/60 space-y-1">
              <div>
                <span className="text-[10px] text-espresso/60 uppercase block">Número de Cuenta:</span>
                <span className="font-mono font-bold text-espresso">{BUSINESS_INFO.payments.bbva.account}</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] text-espresso/60 uppercase block">Código Interbancario (CCI):</span>
                  <span className="font-mono text-xs text-espresso/80">{BUSINESS_INFO.payments.bbva.cci}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(BUSINESS_INFO.payments.bbva.cci, 'bbva-cci')}
                  className="text-xs text-secondary hover:underline"
                >
                  {copiedField === 'bbva-cci' ? 'Copiado!' : 'Copiar CCI'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface-container-low border-t border-border-hairline flex items-center justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-primary hover:bg-espresso text-ivory font-bold text-xs uppercase tracking-wider"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
