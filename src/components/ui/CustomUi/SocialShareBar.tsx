'use client';

import { Button } from '../button';
import { Link as LinkIcon, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { toast } from 'sonner';

interface SocialShareBarProps {
  url: string;
  title: string;
}

export const SocialShareBar = ({ url, title }: SocialShareBarProps) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success('Link copied to clipboard');
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground mr-2 font-medium">Share:</span>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(shareLinks.facebook, '_blank')}
        aria-label="Share on Facebook"
      >
        <FaFacebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={() => window.open(shareLinks.twitter, '_blank')}
        aria-label="Share on Twitter"
      >
        <FaTwitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full"
        onClick={handleCopyLink}
        aria-label="Copy link"
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="h-8 w-8 rounded-full sm:hidden"
        onClick={handleNativeShare}
        aria-label="Native share"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
