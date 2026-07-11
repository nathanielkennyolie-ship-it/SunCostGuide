declare module "next/dist/lib/metadata/types/metadata-interface.js" {
  import type { Metadata, ResolvingMetadata, Viewport } from "next";
  export type { Metadata, ResolvingMetadata, Viewport };
  export type ResolvingViewport = ResolvingMetadata;
}

declare module "next/types.js" {
  import type { Metadata, ResolvingMetadata, Viewport } from "next";
  export type { Metadata, ResolvingMetadata, Viewport };
  export type ResolvingViewport = ResolvingMetadata;
}
