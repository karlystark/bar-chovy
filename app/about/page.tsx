import Image from "next/image";

export default function About() {

    return (
        <div className="About">
            <div className="flex justify-around items-center">
            <Image src="/olives.png" alt="olives icon" height="400" width="400" />
            <div className="flex flex-col bg-[#fcf1e9] shadow-lg p-8 rounded-xl m-10">
                <h3 className="mb-3">how it works:</h3>
                <ul>
                    <li> - check out the theme of the month (menu)</li>
                    <li> - bring a friend (or not!) </li>
                    <li> - bring an item (rsvp)</li>
                    <li> - indulge me as I go really extra with this</li>
                    <li> - meet people and get warm</li>
                </ul>
            </div>
            </div>
        </div >
    );
}