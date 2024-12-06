import { getColorIterator } from "../utils/colors/color.js"
import blob from "../utils/blob/blob.js"

export default function (key, draw) {

    let nextColor = getColorIterator(key)

    let b = blob(key.next256())
    console.log(b);
    b.fill(nextColor()).opacity(0.5)
    b.move(-250,-250).size(1000)
    b.addTo(draw)

    b = blob(key.next256())
    b.fill(nextColor()).opacity(0.5)
    b.move(500,-250).size(1000)
    b.addTo(draw)

    b = blob(key.next256())
    b.fill(nextColor()).opacity(0.5)
    b.move(-250,500).size(1000)
    b.addTo(draw)

    b = blob(key.next256())
    b.fill(nextColor()).opacity(0.5)
    b.move(400,400).size(1000)
    b.addTo(draw)

}
