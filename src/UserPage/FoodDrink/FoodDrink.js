import Account from "../../Components/Account/Account";
import foodImg from "../../Assets/Images/fooddrink.png"

const FoodDrink = () => {

    return (
        <>
            <Account accImg={foodImg} userName="Food & Drink" follower="45K subscribed" id={10} header='Food & Drink videos' />
        </>

    )
}

export default FoodDrink;