import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/923025820230"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Chat"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
};

export default WhatsAppButton;