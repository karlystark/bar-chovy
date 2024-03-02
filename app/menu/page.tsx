import MenuCard from "../components/MenuCard/MenuCard";

export default function Menu (){

    const menu = [
        {
            images:["/cheeseplate.png", ],
            alt: ["cheese plate"],
            text: ["cheese board magic", "cheeses, meats, olives", "gluten-free options"]
        },
        {
            images:["/salad.png"],
            alt: ["salad"],
            text: ["fresh salad", "various nutrients, fruits, veg, flowers", "vegan, gluten-free"]
        },
        {
            images:["/pasta.png",],
            alt: ["pasta"],
            text: ["family pasta", "tomato, anchovy, fresh herbs", "pescatarian, dairy-free"]
        },
        {
            images:["/cake.png",],
            alt: ["cake"],
            text: ["orange cake", "orange, powdered sugar", "none"]
        },

    ]

    return (
        <div className="Menu mt-8">
            <p className="inline-block bg-[#fcf1e9] rounded-xl p-4 ml-4 text-base">02.02.2024</p>
        <div className="flex flex-wrap justify-center">
            {
                menu.map((item, idx) => <MenuCard data={item} key={idx}/>)
            }
        </div>
        </div>

    );
}