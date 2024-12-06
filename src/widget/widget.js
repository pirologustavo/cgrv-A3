import { getColorIterator } from "../widget/utils/colors/color.js";
import blob from "../widget/utils/blob/blob.js";
import shape from "../widget/utils/shape/shape.js";

function widget(key, draw) {
    let nextColor = getColorIterator(key);

    draw.rect().size(500, 500).move(250, 250).fill(nextColor()); 
    draw.circle().size(350).move(400, 325).fill(nextColor()).opacity(0.5); 
    draw.circle().size(350).move(250, 325).fill(nextColor()).opacity(0.5);

    let b = blob(key.next());
    b.fill(nextColor()).move(100, 100).size(500);
    b.addTo(draw);

    let s = shape(key.next());
    s.fill(nextColor()).move(150, 150).size(300);
    s.addTo(draw);
}

export default widget;
