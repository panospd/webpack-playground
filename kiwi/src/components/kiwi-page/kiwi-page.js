import Heading from "../heading/heading";
import KiwiImage from "../kiwi-image/kiwi-image";

class KiwiPage {
  render() {
    const kiwi = new KiwiImage();
    const heading = new Heading();

    heading.render("kiwi");
    kiwi.render();
  }
}

export default KiwiPage;
