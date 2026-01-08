import { GalleryService } from "./service/GalleryService.js";
import { GalleryView } from "./view/GalleryView.js";

(async () => {
  const service = new GalleryService();
  const categories = await service.getCategories();
  const images = await service.getImages();
  const view = new GalleryView(categories, images, service.postEntry);
})();
