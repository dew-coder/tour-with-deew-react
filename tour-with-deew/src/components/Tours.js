import './Tours.css' 
import Card from './Card';


function Tours({tours, removetour}){
    console.log(tours);

    return (
        <div>
            <div className='all-card'>
                { 
                    tours.map((tour) => {
                    console.log("abcd");
                        return (<Card key = {tour.id}{...tour} removetour = {removetour}></Card>);
                    }) 
                }
            </div> 
        </div> 
    );

}

export default Tours;