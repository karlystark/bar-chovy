import MenuCard from "../components/MenuCard/MenuCard";

export default function Menu (){

    const menu = [
        {
            images:["/cheeseplate.png", ],
            alt: ["cheese plate"],
            text: ["cheese board magic", "cheeses, meats, olives"]
        },
        {
            images:["/salad.png"],
            alt: ["salad"],
            text: ["salad", "various nutrients and flowers"]
        },
        {
            images:["/pasta.png",],
            alt: ["pasta"],
            text: ["family pasta", "tomato, anchovy, fresh herbs"]
        },
        {
            images:["/cake.png",],
            alt: ["cake"],
            text: ["cake", "orange, powdered sugar"]
        },

    ]

    return (
        <div className="Menu">
            <p className="inline-block bg-[#fcf1e9] rounded-xl p-4 m-6 text-m">3.14.2024</p>
        <div className="Menu flex flex-wrap justify-center">
            {
                menu.map((item, idx) => <MenuCard data={item} key={idx}/>)
            }
        </div>
        </div>

    );
}