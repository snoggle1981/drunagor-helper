import AvatarImageUrl from "@/assets/hero/avatar/SavranAvatar.png";
import ImageUrl from "@/assets/hero/big/SavranBig.webp";
import MiniatureImageUrl from "@/assets/hero/miniature/SavranMiniature.webp";
import type { HeroData } from "@/data/store/HeroData";
import type { ContentId } from "@/data/type/ContentId";
import type { HeroClass } from "@/data/type/HeroClass";
import type { HeroPath } from "@/data/type/HeroPath";
import type { HeroRace } from "@/data/type/HeroRace";

export class Savran implements HeroData {
  id = "savran";
  name = "Savran";
  content: ContentId = "spoils-of-war";
  class: HeroClass = "Druid";
  path: HeroPath = "Nature";
  race: HeroRace = "Human";
  images = {
    big: ImageUrl,
    avatar: AvatarImageUrl,
    miniature: MiniatureImageUrl,
    list: "",
  };
}
