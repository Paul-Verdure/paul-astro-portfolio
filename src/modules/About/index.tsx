import { type FC } from "react";
import * as S from "./styled";
import { Container } from "@components/Container";
import { Image } from "@static/images";
import { Button } from "@components/Button";
import { TextBox } from "@components/textBox";
import { FadeIn } from "@utils/animations/FadeIn";

type AboutProps = {
  hideExp?: boolean;
};

// Hide exp is for hiding the commercial experience - on the about page cuz there is a separate section for that
export const About: FC<AboutProps> = ({ hideExp }) => {
  return (
    <S.AboutStyled>
      <Container>
        <FadeIn>
          <S.AboutTitle>About me</S.AboutTitle>
        </FadeIn>
        <S.AboutContent>
          <S.AboutContentText>
            <FadeIn>
              <p>
                As a Software Engineer, I specialize in crafting intuitive user
                interfaces that meet user expectations. I thrive on solving
                complex challenges and excel in technical communication, adeptly
                conveying application intricacies to diverse stakeholders.
                <br />
                My educational background includes a Computer Software
                Engineering degree from Wild Code School and a Master's in
                Management from KEDGE BS, providing me with a blend of technical
                expertise and strategic business insight.
              </p>

              <h3>What I can do?</h3>
              <p>
                I build applications such as data visualization dashboards,
                e-commerce websites, and landing pages. I am proficient in
                React, JavaScript, and Next.js, and I have experience with Figma
                for UI/UX design. I am passionate about creating user-friendly
                interfaces that are visually appealing and easy to navigate. I
                am always eager to learn new technologies and expand my skill
                set.
              </p>
            </FadeIn>
            <FadeIn>
              <S.AboutContentBoxesWrapper>
                <TextBox>
                  <h4>Web Development</h4>
                  <p>
                    From scratch to deployment, I can build a web application that meets your needs. I can also maintain and update existing applications.
                  </p>
                </TextBox>
                <TextBox>
                  <h4>UX/UI</h4>
                  <p>
                    I can propose and implement design solutions that are both user-friendly and visually appealing.
                  </p>
                </TextBox>

                <TextBox>
                  <h4>Problem-solving</h4>
                  <p>
                    I can analyze complex problems and develop innovative solutions to meet your business needs.
                  </p>
                </TextBox>

                <TextBox>
                  <h4>Communication</h4>
                  <p>
                    I can effectively communicate technical information to non-technical stakeholders.
                  </p>
                </TextBox>
              </S.AboutContentBoxesWrapper>
            </FadeIn>
            {!hideExp && (
              <FadeIn>
                <h3>What is my commercial experience?</h3>
                <S.AboutContentBoxesWrapper>
                  <TextBox variant="background-text" bgText="mid">
                    <h4>React</h4>
                    <p>2,5 years</p>
                  </TextBox>
                  <TextBox variant="background-text" bgText="mid">
                    <h4>JavaScript & Typescript</h4>
                    <p>2,5 years</p>
                  </TextBox>
                  <TextBox variant="background-text" bgText="junior">
                    <h4>Next.js</h4>
                    <p>1 year</p>
                  </TextBox>
                  <TextBox variant="background-text" bgText="new">
                    <h4>Figma</h4>
                    <p>few months</p>
                  </TextBox>
                </S.AboutContentBoxesWrapper>
                <Button link="/about">view projects</Button>
              </FadeIn>
            )}
          </S.AboutContentText>
          <S.AboutContentImage>
            <FadeIn delay={0.3}>
              <Image
                srcLocal="paulImg"
                alt="paul verdure"
                width={500}
                height={500}
              />
            </FadeIn>
          </S.AboutContentImage>
        </S.AboutContent>
      </Container>
    </S.AboutStyled>
  );
};
