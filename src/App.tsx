function App() {
  return (
    <>
      <div>
        <h1 className="text-[48px] m-8">
          <b>
            BLOCKCH<span className="text-emerald-700">URNA</span>
          </b>{" "}
          <span className="text-3xl mx-4">Block Explorer</span>
        </h1>
      </div>
      <div className="overflow-x-auto mx-8">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Block Id</th>
              <th>Size</th>
              <th>Votes</th>
              <th>Confirmation</th>
              <th>Previous Node</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {/* row 1 */}
            {[1, 2, 3, 4, 5].map((i) => (
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://play-lh.googleusercontent.com/-kci8EPQjt0nFCCnVOPVQM7eo0M7WX3KbgwzS2GrR_jCJXs-_3c06DK_uUuNudp_CVvh"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        ca978112ca1bbdcafac231b39a23dc4da786ef
                      </div>
                      <div className="text-sm opacity-50">
                        Created at 2024/10/10 19h46
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <b>578 Kb</b>
                </td>
                <td>
                  <b>135</b> unique votes
                </td>
                <td>
                  <b>135</b> Confirmations
                </td>
                <td>
                  <b>ca978112ca1bbdcafac231b39a23dc4da786ef</b>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
