"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function LaunchCta() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <Dialog>
        <DialogTrigger
          render={
            <Button
              size="lg"
              className="h-12 rounded-xl bg-ink px-7 text-base font-semibold text-shell hover:bg-ink/90"
            />
          }
        >
          Launch link soon
        </DialogTrigger>
        <DialogContent className="border-border bg-shell sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl tracking-tight text-ink">
              Not launched yet
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-muted-foreground">
              No contract address, pool, or trading link is live on this page.
              When $HATCH has a real launch URL, it will replace this
              placeholder. Until then, treat everything here as narrative —
              not a market listing.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <Button
        size="lg"
        variant="outline"
        nativeButton={false}
        className="h-12 rounded-xl border-ink/20 bg-white/50 px-7 text-base font-semibold text-ink hover:bg-white/80"
        render={<a href="#story" />}
      >
        Read the loop
      </Button>
    </div>
  );
}
