import ColumnSelection from '../layout/Columns';
import { Columns } from '../layout/Columns';
import RowSelection from '../layout/Rows';
import { Rows } from '../layout/Rows';
import BlogsCard from './BlogCards';
import AquaCake from '../../../src/assets/general/AquaCake.jpg';
import CutieCake from '../../../src/assets/general/CutieCake.jpg';
import PrincessCupcake from '../../../src/assets/general/PrincessCupcake.jpg';

function BlogSelections() {
  return (
    <div className="bg-[#F2E9E9] mb-10 mt-5 py-12">
      <div className="container mx-auto px-4">
        <RowSelection Row={Rows.ROWCOLUMNS}>
          <div className="mb-5 mx-auto text-center">
            <p className="text-4xl font-medium tracking-wide uppercase">
              Our Products
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod
            </p>
          </div>
          <RowSelection Row={Rows.ONEROW}>
            <ColumnSelection Column={Columns.THREECOLUMNS}>
              <div>
                <BlogsCard
                  image={AquaCake}
                  imageAlt="Aqua Cake"
                  Title="Cutie cake"
                  Description="Candy donut tootsie roll sugar plum topping gummies jelly gummi bears lemon drops. Jujubes marzipan pie tiramisu caramels jelly beans gingerbread shortbread. Cheesecake fruitcake tiramisu oat cake jujubes toffee."
                />
              </div>

              <div>
                <BlogsCard
                  image={CutieCake}
                  imageAlt="Cutie Cake"
                  Title="Princess Cupcake"
                  Description="Candy donut tootsie roll sugar plum topping gummies jelly gummi bears lemon drops. Jujubes marzipan pie tiramisu caramels jelly beans gingerbread shortbread. Cheesecake fruitcake tiramisu oat cake jujubes toffee. "
                />
              </div>

              <div>
                <BlogsCard
                  image={PrincessCupcake}
                  imageAlt="Princess Cupcake"
                  Title="Aqua Cake"
                  Description="Candy donut tootsie roll sugar plum topping gummies jelly gummi bears lemon drops. Jujubes marzipan pie tiramisu caramels jelly beans gingerbread shortbread. Cheesecake fruitcake tiramisu oat cake jujubes toffee. "
                />
              </div>
            </ColumnSelection>
          </RowSelection>
        </RowSelection>
      </div>
    </div>
  );
}

export default BlogSelections;
