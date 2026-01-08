export class GalleryView {
  ctx;
  canvas;
  img;

  constructor(categories, images, postCallback) {
    this.initCategories(categories);
    this.initGallery(images);
    document.querySelector("#form-send").addEventListener("click", () => postCallback());

    this.img = new Image();
    this.img.crossOrigin = "anonymous";
    this.img.id = "featuredimage";
    this.img.src = "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg";

    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    this.img.onload = () => {
      this.resizeImage();
    };

    document.querySelector("#original").addEventListener("click", () => this.original());
    document.querySelector("#grayscale").addEventListener("click", () => this.grayscale());
    document.querySelector("#inverted").addEventListener("click", () => this.invert());
    document.querySelector("#sepia").addEventListener("click", () => this.sepia());
  }

  initCategories(categories) {
    const categoryContainer = document.querySelector("#filters");
    categoryContainer.innerHTML = "";
    const allLink = document.createElement("A");
    allLink.innerText = "Totes";
    const allListItem = document.createElement("LI");
    allListItem.appendChild(allLink);
    categoryContainer.appendChild(allListItem);

    categories.forEach((category) => {
      const link = document.createElement("A");
      const listItem = document.createElement("LI");

      link.innerText = category;
      // TODO filter

      listItem.appendChild(link);
      categoryContainer.appendChild(listItem);
    });

    //
    const selectContainer = document.querySelector("#form-categoria");
    selectContainer.innerHTML = "";
    categories.forEach((category) => {
      const option = document.createElement("OPTION");
      option.innerText = category;
      option.value = category;
      selectContainer.appendChild(option);
    });
  }

  initGallery(images) {
    const gallery = document.querySelector("#contain");
    gallery.innerHTML = "";
    images.forEach((image) => {
      const entry = this.createEntry(image);
      entry.addEventListener("click", () => this.setImage(image.url));
      gallery.appendChild(entry);
    });
  }

  createEntry(entry) {
    const entryElement = document.createElement("DIV");
    entryElement.classList = "four columns item";
    entryElement.style.cursor = "pointer";
    const caption = document.createElement("DIV");
    caption.classList = "caption";
    const img = document.createElement("IMG");
    img.src = entry.url;
    img.classList = "pic";
    const title = document.createElement("H4");
    title.innerText = entry.title;
    const date = document.createElement("P");
    date.innerText = `Publicat el ${entry.date}`;
    caption.appendChild(img);
    entryElement.appendChild(caption);
    entryElement.appendChild(title);
    entryElement.appendChild(date);
    return entryElement;
  }

  resizeImage() {
    this.canvas.width = 400;
    this.canvas.height = 300;

    let w = this.img.width;
    let h = this.img.height;

    // resize img to fit in the canvas
    // You can alternately request img to fit into any specified width/height
    let sizer = this.scalePreserveAspectRatio(w, h, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(this.img, 0, 0, w, h, 0, 0, w * sizer, h * sizer);
  }

  scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
    return Math.min(maxW / imgW, maxH / imgH);
  }

  setImage(url) {
    this.img.src = url;
    this.resizeImage();
  }

  original() {
    this.resizeImage();
  }

  sepia() {
    this.resizeImage();
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      let red = data[i],
        green = data[i + 1],
        blue = data[i + 2];

      data[i] = Math.min(Math.round(0.393 * red + 0.769 * green + 0.189 * blue), 255);
      data[i + 1] = Math.min(Math.round(0.349 * red + 0.686 * green + 0.168 * blue), 255);
      data[i + 2] = Math.min(Math.round(0.272 * red + 0.534 * green + 0.131 * blue), 255);
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

  invert() {
    this.resizeImage();
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    this.ctx.putImageData(imageData, 0, 0);
  }

  grayscale() {
    this.resizeImage();
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      let avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    this.ctx.putImageData(imageData, 0, 0);
  }
}
