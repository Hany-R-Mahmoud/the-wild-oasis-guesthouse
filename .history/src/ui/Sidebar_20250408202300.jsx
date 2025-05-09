import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1/ -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;



curl 'https://fwbhmmimsefigkwbgjtu.supabase.co/rest/v1/cabins?select=*' \
-H "apikey: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmhtbWltc2VmaWdrd2JnanR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjYwMzUsImV4cCI6MjA1OTcwMjAzNX0.7H2u661TvS4euPC-m3jOHhW1kvwKebg_lZD-sFvIC7k" \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmhtbWltc2VmaWdrd2JnanR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjYwMzUsImV4cCI6MjA1OTcwMjAzNX0.7H2u661TvS4euPC-m3jOHhW1kvwKebg_lZD-sFvIC7k"
