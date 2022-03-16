import Script from ".";
import Key from "../KEYS.json";
import Store from "../store";
var count = 0;
var storeImage = [];
const setLengthImage = (img, cb) => {
  var imageCase = img;
  var myImage = [];
  imageCase.map((item) => {
    for (let i = 0; i < item.imgUri.length; i++) {
      myImage.push({ url: item.imgUri[i], id: item.id });
    }
  });
  uploadImage(myImage, true, (res) => {
    imageCase.map((item) => {
      for (let i = 0; i < res.length; i++) {
        if (item.id === res[i].id) {
          item.file.push({
            fileId: res[i].fileId,
            fileCurName: res[i].fileCurName,
            filePrevName: res[i].filePrevName,
            fileExtension: res[i].fileExtension,
          });
        }
      }
    });
    cb(imageCase);
  });
};

function uploadImage(image, frist, cb) {
  if (frist) {
    count = 0;
    storeImage = [];
  }
  if (count + 1 <= image.length) {
    var formdata = new FormData();
    var Type = image[count].url.substring(
      image[count].url.lastIndexOf(".") + 1
    );
    var Data = {
      uri: image[count].url,
      name: `upload_image`,
      type: `image/${Type}`,
    };
    formdata.append("file", Data);
    formdata.append("target", "homecare");
    Store.getLocalStorege(Key.TOKEN, (tk) => {
      const token = tk.detail.token;
      Script.uploadImage(token, formdata, (res) => {
        console.log("uploadImage===>", count+1, res);
        if (count + 1 > image.length) {
          count = 0;
          cb(storeImage);
          return;
        } else {
          res.id = image[count].id;
          storeImage.push(res);
          count++;
          uploadImage(image, false, cb);
          return;
        }
      });
    });
  } else {
    count = 0;
    cb(storeImage);
  }
}

export default {
  setLengthImage,
};
