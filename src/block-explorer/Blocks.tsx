import { BlockDetails } from "./BlockDetails";
import { SearchBar } from "./SearchBar";

export const Blocks = () => {
  return (
    <div className="overflow-x-auto mx-8">
      <div className="m-4">
        <SearchBar />
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Bloco</th>
            <th>Votos</th>
            <th>Sessão</th>
            <th>Cidade</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {/* row 1 */}
          {[1, 2, 3, 4, 5].map((_) => (
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://icons.veryicon.com/png/o/miscellaneous/foundation-icon-4/block-9.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <BlockDetails />
                </div>
              </td>
              <td>
                <div>
                  <b>135</b> votos{" "}
                </div>
                <div>
                  {" "}
                  <b>578 </b> Kb
                </div>
              </td>
              <td>
                <div>
                  Zona: <b>177</b>
                </div>
                <div>
                  Seção: <b>UTFPR</b>
                </div>
              </td>
              <td>
                <div>Curitiba - PR</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
