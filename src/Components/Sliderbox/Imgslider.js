import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01QEL53b1ZNOzSa5hHT_!!6000000003182-0-tps-990-400.jpg" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01tzlNNl28xaqEZItHA_!!6000000007999-0-tps-990-400.jpg" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01VNUdjq1ftoijrNU7P_!!6000000004065-2-tps-990-400.png" },
];

const Imgslider = () => {
  return (
    <div>
        {/* <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png " /> */}
      <SimpleImageSlider
        width={1000}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        style={{margin:"0 1rem"}}
      />
    </div>
  );
}

export default Imgslider