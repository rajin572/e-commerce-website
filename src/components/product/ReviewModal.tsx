"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import ReusableModal from "@/components/ui/CustomUi/ReuseableModal";
import { Button } from "@/components/ui/button";
import { useDictionary } from "@/components/i18n/DictionaryProvider";
import { cn } from "@/lib/utils";
import { useForm, Controller } from "react-hook-form";
import { FormTextarea, FormUpload } from "@/components/ui/CustomUi/ReuseForm/Form";
import type { FileWithPreview } from "@/components/ui/CustomUi/ReuseForm/FileUpload";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ReviewModalProps {
  children: React.ReactNode;
}

interface ReviewFormValues {
  opinion: string;
  images: FileWithPreview[];
  rating: number;
}

export const ReviewModal = ({ children }: ReviewModalProps) => {
  const { dict: t, locale } = useDictionary();
  const [hoverRating, setHoverRating] = useState(0);

  const { control, handleSubmit } = useForm<ReviewFormValues>({
    defaultValues: {
      opinion: "",
      images: [],
      rating: 0,
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    // Simulate submission
    console.log("Submitted", data);
  };

  const rm = t.product.reviewModal || (locale === "bn" ? {
    title: "আপনার মতামত জমা দিন",
    subtitle: "আপনার ইমেল ঠিকানা প্রকাশিত হবে না। প্রয়োজনীয় ক্ষেত্রগুলি * চিহ্নিত করা হয়েছে",
    opinionLabel: "পণ্য সম্পর্কে আপনার মতামত লিখুন",
    opinionPlaceholder: "এখানে আপনার মতামত লিখুন...",
    imagesLabel: "ছবি আপলোড করুন (ঐচ্ছিক)",
    ratingLabel: "আপনার রেটিং:",
    submit: "মতামত জমা দিন",
  } : {
    title: "Submit Your Review",
    subtitle: "Your email address will not be published. Required fields are marked *",
    opinionLabel: "Write your opinion about the product",
    opinionPlaceholder: "Write Your Review Here...",
    imagesLabel: "Upload Images (Optional)",
    ratingLabel: "Your Rating:",
    submit: "SUBMIT REVIEW",
  });

  return (
    <ReusableModal
      trigger={children as React.ReactElement}
      title="" // We will hide the default title visually but screen readers can see it
      maxWidth="sm:max-w-[800px]"
    >
      <div className="sr-only">
        <DialogTitle>{rm.title}</DialogTitle>
        <DialogDescription>{rm.subtitle}</DialogDescription>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground">{rm.title}</h2>
        <div className="h-1 w-16 bg-primary mt-2 mb-4" />
        <p className="text-sm text-text-secondary">{rm.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <FormTextarea
          name="opinion"
          control={control}
          label={rm.opinionLabel}
          placeholder={rm.opinionPlaceholder}
        />

        <FormUpload
          name="images"
          control={control}
          label={rm.imagesLabel}
          maxFiles={3}
        />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-border mt-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-foreground mb-2">
              {rm.ratingLabel}
            </label>
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
                        size={24}
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

          <Button type="submit" className="w-full sm:w-auto h-12 px-8 font-bold text-sm bg-[#222731] hover:bg-[#222731]/90 text-white rounded-md transition-colors uppercase tracking-wider">
            {rm.submit}
          </Button>
        </div>
      </form>
    </ReusableModal>
  );
};
