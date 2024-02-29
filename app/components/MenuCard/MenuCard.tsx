
import Image from "next/image";
import './MenuCard.css';

/** MenuCard renders a customizable card with a header image, custom alt-text,
 * menu item title, and menu item description.
 *
 * Props:
 *  => data: an object with images, alt text, and text data.
 *    ex. {
 *          images: ['main.jpg', ''],
 *          alt: ['a great dane', ''],
 *          text: ['header text', 'paragraph text'],
 *        }
 *
 * State: none
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
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-8 bg-[#0c1b38] h-[500px]">
                <Image src={images[0]} className="w-full" alt={alt[0]} width="200" height="200" />
                <div className="px-6 py-4 h-[200px] bg-[#fcf1e9]">
                    <h2 className="text-xl mb-2">{text[0]}</h2>
                    <p className="mt-4 text-base">{text[1]} </p>
                </div>
            </div>
        </div>
    );
}