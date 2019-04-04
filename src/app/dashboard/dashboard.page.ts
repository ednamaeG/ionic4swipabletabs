import { SwipableService } from "./../services/swipable.service";
import { AuthService } from "./../services/auth.service";
import { Component, OnInit } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { FileTransfer, FileUploadOptions, FileTransferObject } from "@ionic-native/file-transfer/ngx";
@Component({
 selector: "app-dashboard",
 templateUrl: "./dashboard.page.html",
 styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
 token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwYjFlNDU3NzE4MTdiMTUyMjRhMGFjMjAzN2MyZWM5ZGExMDhjMTU4ZTdjMTNhNThkNDczODhhNzQ4YjM3ZDc4YzM5MDliODk0MTEzOTFkIn0.eyJhdWQiOiIxIiwianRpIjoiZjBiMWU0NTc3MTgxN2IxNTIyNGEwYWMyMDM3YzJlYzlkYTEwOGMxNThlN2MxM2E1OGQ0NzM4OGE3NDhiMzdkNzhjMzkwOWI4OTQxMTM5MWQiLCJpYXQiOjE1NTQxNjI5ODEsIm5iZiI6MTU1NDE2Mjk4MSwiZXhwIjoxNTg1Nzg1MzgxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.Weafdp2lCTi3ZYdrHjRoC2zpkwH0m15173iAjbDnG8OFIxTWB59ntbJ3XSgygqVnM09QWB73VPbVHbwm0RMUCAToZSmTvorCYulFJ0w6AndG7_Vw_bEST7i_U_aXk24sp-I2Hkzd1LduVarPPVsCZUZKAPGr_8zev41Xr40V-raYh-BQufx6u-4Qr0k72IU-2BsX_fvzpPSjfL5AIi-t9aAqlzmmyFhInMEuva50Vfe8L1B-ty9oqnt-Nb3FHixAJKDHnp09svVNmYB3QYSbbcHLtfMuCnUY4VLfvS8pq1r29UQp988OilYgnVNvdnpI4ph8MIONrGbjuG1xibVb4kM61p5t1nHc1hmZ-zaYLh6-LmzWi7lVUXOFpQ6D8d3_bemCBiS4UgAsJsd3bWAaTXsCWY7U_QLDXp9holqhpj1-YqYijw_MTbanz34U5kbXk6tkQ2XplIyawFA5hiYh8q-uCgM2rv6AQAV87w9Dquz7ZdXyhVR-jI-J_MiXteGZMWmm1Swm5glm_LDHwTRNqDsnc8wn9pbI56BGmdZrZE74ByGZvQpYqBQ6iqdGQj8YOmAeWtbsQTRGeaLewe8tfJvwuy4J9GkW5iRh3aDCIHvzoAUG5VEwvOa1R3mWfpbKinJlxjIBREOUypVu3xrJ_hGIKF6V6l0QAdg8VrGKRr8";
 base64Image = "";
 constructor(public auth: AuthService, private swipeSvc: SwipableService, private camera: Camera, private fileTransfer: FileTransfer) {}

 ngOnInit() {}

 openCamera() {
  const options: CameraOptions = {
   quality: 100,
   mediaType: this.camera.MediaType.PICTURE
  };

  this.camera.getPicture(options).then(
   (imageData) => {
    const file = imageData;
    console.log("file", file);
    this.sendFileToServer(file);
   },
   (err) => {}
  );
 }

 async sendFileToServer(file) {
  let address = "http://192.168.0.156/api/posts";
  const fileTransfer: FileTransferObject = this.fileTransfer.create();
  let options: FileUploadOptions = {
   fileKey: "cover_img",
   chunkedMode: false,
   mimeType: "mulitpart/form-data",
   headers: {
    Accept: "application/json",
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImYwYjFlNDU3NzE4MTdiMTUyMjRhMGFjMjAzN2MyZWM5ZGExMDhjMTU4ZTdjMTNhNThkNDczODhhNzQ4YjM3ZDc4YzM5MDliODk0MTEzOTFkIn0.eyJhdWQiOiIxIiwianRpIjoiZjBiMWU0NTc3MTgxN2IxNTIyNGEwYWMyMDM3YzJlYzlkYTEwOGMxNThlN2MxM2E1OGQ0NzM4OGE3NDhiMzdkNzhjMzkwOWI4OTQxMTM5MWQiLCJpYXQiOjE1NTQxNjI5ODEsIm5iZiI6MTU1NDE2Mjk4MSwiZXhwIjoxNTg1Nzg1MzgxLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.Weafdp2lCTi3ZYdrHjRoC2zpkwH0m15173iAjbDnG8OFIxTWB59ntbJ3XSgygqVnM09QWB73VPbVHbwm0RMUCAToZSmTvorCYulFJ0w6AndG7_Vw_bEST7i_U_aXk24sp-I2Hkzd1LduVarPPVsCZUZKAPGr_8zev41Xr40V-raYh-BQufx6u-4Qr0k72IU-2BsX_fvzpPSjfL5AIi-t9aAqlzmmyFhInMEuva50Vfe8L1B-ty9oqnt-Nb3FHixAJKDHnp09svVNmYB3QYSbbcHLtfMuCnUY4VLfvS8pq1r29UQp988OilYgnVNvdnpI4ph8MIONrGbjuG1xibVb4kM61p5t1nHc1hmZ-zaYLh6-LmzWi7lVUXOFpQ6D8d3_bemCBiS4UgAsJsd3bWAaTXsCWY7U_QLDXp9holqhpj1-YqYijw_MTbanz34U5kbXk6tkQ2XplIyawFA5hiYh8q-uCgM2rv6AQAV87w9Dquz7ZdXyhVR-jI-J_MiXteGZMWmm1Swm5glm_LDHwTRNqDsnc8wn9pbI56BGmdZrZE74ByGZvQpYqBQ6iqdGQj8YOmAeWtbsQTRGeaLewe8tfJvwuy4J9GkW5iRh3aDCIHvzoAUG5VEwvOa1R3mWfpbKinJlxjIBREOUypVu3xrJ_hGIKF6V6l0QAdg8VrGKRr8`
   },
   params: {
    title: "Testfile",
    content: "Sample Content 1234"
   }
  };

  try {
   const result = await fileTransfer.upload(file, address, options);
   console.log("result", result);
  } catch (err) {
   console.log("error", err);
  }
 }
}
