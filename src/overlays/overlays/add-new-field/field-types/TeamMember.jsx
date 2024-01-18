import  { useState } from 'react';
import styled from 'styled-components';

export default function TeamMember({ onGetOptionsData }) {
  const [teamMembers, setTeamMembers] = useState(1);

  const handleTeamMembersChange = (e) => {
    const newTeamMembers = Number(e.target.value);
    
    if (newTeamMembers !== teamMembers) {
      setTeamMembers(newTeamMembers);

      // Assuming you want to send the selected number of team members to the parent component
      onGetOptionsData && onGetOptionsData({ teamMembers: newTeamMembers });
    }
  };

  return (
    <Container>
      <p>Maximum number of team members:</p>
      <select onChange={handleTeamMembersChange} value={teamMembers}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    color: #fff;
    margin-right: 1rem;
  }

  select {
    border: none;
    border-left: 1px solid #acebf6;
    background-color: #293749;
    color: #fff;
    padding: 0.5rem;
    height: 2rem;
    width: 20%;
    outline: none;
  }
`;
