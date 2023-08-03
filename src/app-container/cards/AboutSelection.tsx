import ColumnSelection from '../layout/Columns';
import { Columns } from '../layout/Columns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import carBMW from '../../assets/general/CarBMW.jpg';
//import BlogsCard from './BlogCards';
import Button from '../button/Buttons';
import { ButtonTypes } from '../button/Buttons';
import RowSelection from '../layout/Rows';
import { Rows } from '../layout/Rows';

function AboutSelection() {
  return (
    <div className="bg-[white] my-14">
      <div className="container mx-auto px-4">
        <ColumnSelection Column={Columns.TWOCOLUMNS}>
          <div className="w-3/5">
            <span className="text-lg font-bold tracking-wider leading-6 text-[#5C1349]">
              Who we are
            </span>

            <h3 className="text-5xl text-left font-semibold tracking-wide mt-5">
              We run all kinds of software services that vow your success
            </h3>
            <p className="pt-5 text-base leading-6">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book. It usually begins with:
            </p>

            <div className="mt-5 flex flex-col ">
              <div className="bg-[#fff6f5] py-5 px-10 rounded-lg ">
                <p className="pb-5">
                  <span className="text-3xl"> &#8220;</span>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote.
                </p>
              </div>
              <div className="flex flex-row mt-5 space-x-14">
                <div className="w-full">
                  <h3 className="mb-2 text-2xl font-medium">Expert Team</h3>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print
                  </p>
                </div>
                <div className="w-full">
                  <h3 className="mb-2 text-2xl font-medium">
                    <span></span>
                    Custom Code
                  </h3>
                  <p>
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-5">
              <Button ButtonVariant={ButtonTypes.FILLED}>Filled Button</Button>
            </div>
          </div>
          <div className=" w-2/5">
            <img src={carBMW} alt="BMW Car" className="h-4/5 w-full" />
          </div>
        </ColumnSelection>
      </div>
    </div>
  );
}

export default AboutSelection;
