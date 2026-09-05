"use client";

import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { FormTextarea, FormUpload } from "@/components/ui/CustomUi/ReuseForm/Form";
import type { FileWithPreview } from "@/components/ui/CustomUi/ReuseForm/FileUpload";
import { cn } from "@/lib/utils";

interface GuestReviewFormValues {
  opinion: string;
  images: FileWithPreview[];
  rating: number;
}

// TODO: wire to POST /reviews/guest once the endpoint exists.
export default function GuestReviewClient({ token }: { token: string }) {
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const { control, handleSubmit } = useForm<GuestReviewFormValues>({
    defaultValues: { opinion: "", images: [], rating: 0 },
  });

  const onSubmit = (data: GuestReviewFormValues) => {
    console.log("Guest review submitted", { token, ...data });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-lg text-center">
        <CheckCircle2 size={48} className="text-success mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Thank you for your review!</h1>
        <p className="text-text-secondary">
          Your feedback has been submitted and will appear on the product page once approved.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-2xl">
      <div className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Share Your Experience</h1>
        <p className="text-text-secondary">
          Thanks for your order — let other customers know what you thought.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-surface border border-border rounded-xl p-6 md:p-8 shadow-sm">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Your Rating:</label>
          <Controller
            name="rating"
            control={control}
            render={({ field }) => (
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1 -ml-1 transition-transform hover:scale-110 focus:outline-none"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => field.onChange(star)}
                  >
                    <Star
                      size={28}
                      className={cn(
                        "transition-colors",
                        (hoverRating || field.value) >= star
                          ? "fill-warning text-warning"
                          : "fill-none text-muted-foreground"
                      )}
                    />
                  </button>
                ))}
              </div>
            )}
          />
        </div>

        <FormTextarea
          name="opinion"
          control={control}
          label="Write your opinion about the product"
          placeholder="Write your review here..."
        />

        <FormUpload
          name="images"
          control={control}
          label="Upload Images (Optional)"
          maxFiles={3}
        />

        <Button type="submit" className="w-full h-12 font-bold text-sm uppercase tracking-wider">
          Submit Review
        </Button>
      </form>
    </div>
  );
}
