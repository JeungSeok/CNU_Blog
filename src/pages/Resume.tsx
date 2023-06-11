import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 2rem;
  word-break: keep-all;
`;
const Text = styled.p`
  width: 700px;
`;

const Resume = () => {
  return (
    <div>
      <Title>실전 코딩 수강</Title>
      <Text> 2023.03 ~ 2023.06 </Text>
      <Text> React, SpringBoot 등 다양한 실무 좐련 지식을 수강 </Text>
      <Title>2023 SQLD 자격증 획득</Title>
      <Text> 2023.06 </Text>
      <Text> Sql 개발자 학습 및 자격증 획득 </Text>
      <Title> 렌터카 윕 프로젝트</Title>
      <Text> 2023.05 ~ </Text>
      <Text> 개인 프로젝트로 진행중 </Text>
    </div>
  );
};
export default Resume;
