"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingChat = () => {
    return (
        <a 
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us"
            className="fixed right-4 bottom-20 md:bottom-[40%] md:translate-y-[100px] w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-xl flex items-center justify-center z-40 hover:scale-110 transition-transform hover:bg-primary-dark"
        >
            <MessageCircle size={28} />
        </a>
    );
};

export default FloatingChat;
