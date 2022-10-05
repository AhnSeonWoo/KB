import { css } from "@emotion/css";

function FooterText({ children }) {
    return (
        <p
            className={css`
                position: absolute;
                width: 400px;
                margin-left: 34px;
                padding-top: auto;
                font-family: "Do Hyeon";
                font-style: normal;
                font-weight: 400;
                font-size: 15px;
                display: block;
                color: #ffffff;
                white-space: pre-line;
            `}
        >
            {children}
        </p>
    );
}

function Footer() {
    return (
        <footer
            className={css`
                position: absolute;
                width: 100%;
                height: 79px;
                left: 0px;
                top: 1001px;

                background: linear-gradient(
                        0deg,
                        rgba(0, 0, 0, 0.2),
                        rgba(0, 0, 0, 0.2)
                    ),
                    #7097a8;
            `}
        >
            <FooterText>
                주 소 : 서울특별시 강남구 언주로 508 14층(역삼동, 서울상록빌딩)
                <br />
                개발자 : 김영우, 박정우, 안선우, 이가은, 이원섭
                <br />
                Copyright by Multicampus Co., Ltd. All rights reserved.
            </FooterText>
        </footer>
    );
}

export default Footer;
