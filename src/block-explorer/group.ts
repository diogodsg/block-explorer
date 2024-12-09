export const groupData = (data: any[]) => {
  const groupedVotes = data.reduce((acc: any, current) => {
    const city = current.city;

    // If city doesn't exist in accumulator, initialize it
    if (!acc[city]) {
      acc[city] = {
        city: current.city,
        state: current.state,
        votes: {},
      };
    }

    // Aggregate votes for each candidate
    current.votes.forEach(({ candidate, votes }: any) => {
      if (!acc[city].votes[candidate]) {
        acc[city].votes[candidate] = 0;
      }
      acc[city].votes[candidate] += votes;
    });

    return acc;
  }, {});

  // Convert grouped data back into an array, if needed
  const groupedArray = Object.values(groupedVotes).map((group: any) => ({
    city: group.city,
    state: group.state,
    votes: Object.entries(group.votes).map(([candidate, votes]) => ({
      candidate,
      votes,
    })),
  }));

  return groupedArray;
};
