import StepOne from '../../components/StepOne'
import StepTwo from '../../components/StepTwo'
import StepThree from '../../components/StepThree'
import StepFour from '../../components/StepFour'
import StepFive from '../../components/StepFive'


const Page = async ({ params }) => {

    const whichPage = async () => {

        switch (params.page) {

            case "first":
                return <StepOne />

            case "second" :
                return <StepTwo />

            case "third":
                return <StepThree />

            case "fourth" :
                return <StepFour />

            case "fifth" :
                return <StepFive />

            default:
                return <div> 404 </div>
        }

    }

    return (
        <div className="py-5">
            {whichPage()}
        </div>
    )
}

export default Page;