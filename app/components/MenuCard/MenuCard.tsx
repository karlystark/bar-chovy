
import Image from "next/image";
import './MenuCard.css';

/** menuCard renders a customizable card with an mp4 video on top, a circle img
 * icon, and a text box with heading and text.
 *
 * Props:
 *  => data: an object with a main image, a circle image, alt, and text data.
 *    ex. {
 *          mainImg: 'main.jpg',
 *          image: 'dog.jpg',
 *          alt: 'a great dane',
 *          text: ['header text', 'paragraph text'],
 *        }
 *
 * State: none
 *
 * Considerations:
 *    => Be sure that header text is short (may need to experiment to find a
 *    length that works, but two short words looks particularly good).
 *    => Be sure that alt-text is clear and concise for your image. if the image
 *    is not important/purely decorative for your card, you can pass an empty
 *    string as the alt.
 *    => custom styles/css was used to make this component. you'll need it for
 *    this component to work.
 */

interface MenuCardProps {
    data: {
        images: string[],
        alt: string[],
        text: string[],
    };
}

export default function MenuCard({ data }: MenuCardProps) {

    const { images, alt, text } = data;

    return (
        <div className="menuCard">
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-8 bg-[#0c1b38]">
                <Image src={images[0]} className="w-full" alt={alt[0]} width="200" height="200" />
                <div className="px-6 py-4 bg-[#fcf1e9]">
                    <h2 className="text-xl mb-2">{text[0]}</h2>
                    <p className="mt-4 text-base">{text[1]} </p>
                </div>
            </div>
        </div>
    );
}