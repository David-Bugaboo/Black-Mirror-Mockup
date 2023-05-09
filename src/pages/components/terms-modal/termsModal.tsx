import { useContext } from "react";
import { Modal, ModalWrapper } from "./style";
import { ModalContext } from "../../../context/modalContext";

function TermsModal() {
  const {switchModal} = useContext(ModalContext)
  return (
    <ModalWrapper onClick={switchModal}>
        <Modal>
          <div>
            <p>
              In these Terms of Use, any use of the words "you", "yours" or similar
              expressions shall mean any user of this website and the app
              whatsoever. Terms such as "we", "us, "our" or similar expressions
              shall mean the Football Association Premier League Limited. This
              website, www.premierleague.com (the “Website”), and the Premier League
              mobile application (the “App”) are operated by the Football
              Association Premier League Limited, a company registered in England
              and Wales under company number 02719699 with registered office at The
              Premier League, Brunel Building, 57 North Wharf Road, London, W2 1HQ.
              Our VAT number is 672 6255 22. Please read this page carefully as it
              sets out the terms that apply to your use of the Website and the App,
              and any part of their content and all materials appearing on them. By
              using the Website you confirm that you accept these Terms of Use and
              you agree to comply with them. If you do not agree to these Terms of
              Use, please refrain from using the Website and App. YOUR USE OF THE
              WEBSITE IF YOU ARE UNDER 18 If you are under 18, you may need your
              parent/guardian to help you with your use of the Website and the App
              and with reading these Terms and Conditions. If anything is hard to
              understand, please ask you parent/guardian to explain. If you still
              have any questions, you or your parent/guardian can contact us at:
              [info@premierleague.com]. If you are aged 13 or under, you cannot
              register for a Premier League account (“Account”) without the
              permission of your parent/guardian. You need to register if you want
              to play the Fantasy game. You do not need to register to use the
              Website or App. We may collect your personal information when you use
              the Website and the App. You can find out more about how we use your
              personal information in our Questions and Answers. You can find a link
              here: link. OTHER APPLICABLE TERMS These Terms of Use are additional
              to, and should be read in conjunction with, our Privacy Policy and
              Cookie Policy. If you are under 18, we have tried to explain these
              policies for you in our Questions and Answers. You can find a link
              here: link. CHANGES TO THESE TERMS OF USE We may change these terms at
              any time by amending this page. Please check this page regularly to
              take notice of any such changes as you will be deemed to accept them
              through your continued use of the Website and the App. CHANGES TO THE
              WEBSITE We aim to update the Website regularly, and may change the
              content at any time. If the need arises, we may suspend access to the
              Website, or close it indefinitely. We will not be liable if for any
              reason the Website is unavailable at any time or for any period. Any
              of the material on the Website may be out of date at any given time,
              and we are under no obligation to update such material.
            </p>
          </div>
          <button onClick={switchModal}>Close</button>
        </Modal>
    </ModalWrapper>
  );
}

export default TermsModal;
