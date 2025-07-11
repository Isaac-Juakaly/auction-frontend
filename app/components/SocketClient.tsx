
'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';
import { BASE_URL } from '@/lib/api';

type Props = {
  userId: string;

  onAuctionRestarted?: (data: {
    itemId: string;
    auctionEndTime: number;
    isClosed: boolean;
  }) => void;

  onNewHighestBid?: (data: {
    itemId: string;
    amount: number;
    bidderId: string;
  }) => void;

  onAuctionWon?: (data: {
    itemId: string;
    amount: number;
  }) => void;

  onItemSold?: (data: {
    itemId: string;
    winnerId: string;
    amount: number;
  }) => void;
};

export default function SocketClient({
  userId,
  onAuctionRestarted,
  onNewHighestBid,
  onAuctionWon,
  onItemSold,
}: Props) {
  useEffect(() => {
    const socket = io(BASE_URL); // adapte l’URL selon ton backend

    socket.emit('join', userId);
    socket.on('connect', () => {
      console.log('✅ WebSocket connecté');
      socket.emit('join', userId);
    });

    socket.on('AUCTION_RESTARTED', (data) => {
      console.log('📢 AUCTION_RESTARTED reçu :', data);
      onAuctionRestarted?.(data);
    });

    socket.on('NEW_HIGHEST_BID', (data) => {
      console.log('📈 NEW_HIGHEST_BID reçu :', data);
      onNewHighestBid?.(data);
    });

    socket.on('AUCTION_WON', (data) => {
      console.log('🏆 AUCTION_WON reçu :', data);
      onAuctionWon?.(data);
    });

    socket.on('ITEM_SOLD', (data) => {
      console.log('🛒 ITEM_SOLD reçu :', data);
      onItemSold?.(data);
    });

    return () => {
      socket.disconnect();
      console.log('❌ WebSocket déconnecté');
    };
  }, [userId]);

  return null;
}
