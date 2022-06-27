import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { Collapse } from 'antd';
// custom component
import Footer from "../../component/Footer/Footer"
import { MainBox } from "./TermsStyle"
// action   
const Terms = props => {
    // variables & states
    const { Panel } = Collapse;
    const {

    } = props
    // functions 
    return (
        <>
            <div>
                <div style={{ textAlign: "center", paddingTop: 16 }} >
                    <h1 style={{ fontSize: 24, fontWeight: "bold" }} >Terms of Use</h1>
                </div>
                <MainBox>
                    <p>Vemshala and its affiliates provides its content on its websites or applications that post a link to this Terms of Use (the &ldquo;Site&rdquo;) subject to the following terms and conditions (the &ldquo;Terms&rdquo;). We may periodically change the Terms without prior notice, so please check back from time to time. By accessing and using this Site, you agree to these Terms. For an explanation of Vemshala&rsquo;s practices and policies related to the collection, use, and storage of our users&rsquo; information, please read our&nbsp;<a href="/privacy-policy"><strong>Privacy Policy</strong></a>.</p>

                    <h2><strong>1.Copyrights</strong></h2>

                    <p>All content and functionality on the Site, including text, graphics, logos, icons, images, and videos and the selection and arrangement thereof, in addition to any concepts, know-how, tools, frameworks, software, applications or other technology, algorithms, models, processes, and industry perspectives underlying or embedded in the foregoing, along with any enhancements to or derivative works thereof (the &ldquo;Site Content&rdquo;) is the exclusive property of Vemshala or its licensors and, to the extent applicable, is protected by various Governments / Bodies. and international copyright laws. Neither the Site Content nor functionality of the Site, may be copied, reproduced, modified, reverse engineered, altered (including the removal or disabling of any security or technological safeguards, disclaimers, or legends) uploaded, published, uploaded, posted, transmitted, or distributed in any way without our written permission, except for those uses specified in Section 3 &ndash; Use of site content. All rights not expressly granted are reserved</p>

                    <h2><strong>2.Trademarks</strong></h2>

                    <p>The trademarks, service marks, designs, and logos (collectively, the &ldquo;Trademarks&rdquo;) displayed on the Site are the registered and unregistered Trademarks of Vemshala and its licensors. You agree that, except as expressly permitted by us (e.g., through social media sharing tools provided on the Site) or by our licensors, where applicable, you will not refer to or attribute any information to Vemshala or its licensors in any public medium (e.g., press release, websites, or public social media) for advertising or promotion purposes, or for the purpose of informing or influencing any third party and that you will not use or reproduce any Trademark of, or imply any endorsement by or relationship with, Vemshala or its licensors.</p>

                    <h2><strong>3.Use of site content</strong></h2>

                    <p>Vemshala hereby grants you a limited, non-exclusive, non-transferable, revocable license for the term hereof to access, carry out shopping activities solely for your personal use. You should refrain from re-selling it again, that you retain all copyright and other proprietary notices displayed on the Site Content, and that you otherwise comply with these Terms. You may not otherwise reproduce, modify, reverse engineer, distribute, transmit, post, or disclose the Site Content without Vemshala&rsquo;s prior written consent. In addition, you may not &ldquo;mirror&rdquo; the Site Content or any portion thereof without Vemshala&rsquo;s express written consent. Nothing on this Site should be construed as granting directly or indirectly, or by implication any license or right to use any Vemshala intellectual property other than as expressly set forth herein. The license granted in this section terminates automatically and immediately if you do not comply with these Terms.</p>

                    <h2><strong>4.User postings</strong></h2>

                    <p>You acknowledge and agree that Vemshala shall own and have the unrestricted right to use, publish, and otherwise exploit any and all information that you post or otherwise publish on the Site in postings, forums or message boards, questionnaire, survey responses, and otherwise, and you acknowledge and agree that, by providing us any such submission, you automatically grant, and hereby do grant, to us a worldwide, non-exclusive, transferable, assignable, sublicensable, fully paid-up, royalty-free, perpetual, irrevocable license and right to use, reproduce, publish, distribute, modify and otherwise exploit such submission for any purpose, and in any form or media, not prohibited by applicable law. In addition, you hereby waive any claims against Vemshala for any alleged or actual infringements of any rights of privacy or publicity, intellectual property rights, moral rights, or rights of attribution in connection with Vemshala&rsquo;s use and publication of such submissions.</p>

                    <p>You covenant that you shall not post or otherwise publish on the Site any materials that (a) are threatening, libellous, defamatory, or obscene; (b) would constitute, or that encourage conduct that would constitute, a criminal offense, give rise to civil liability, or otherwise violate law; (c) infringe the intellectual property, privacy, or other rights of any third parties; (d) contain a computer virus or other destructive element; (e) contain advertising; (f) constitute or contain false or misleading statements; or (g) violates these Terms.</p>

                    <p>Vemshala does not represent or endorse the accuracy of reliability of information posted to the Site by users. In addition, Vemshala does not and cannot review all information posted to the Site by users and is not responsible for such information. However, Vemshala reserves the right to refuse to post and the right to remove any information, in whole or in part, for any reason or for no reason.</p>

                    <h2><strong>5.Notices of infringement and takedown by&nbsp;Vemshala</strong></h2>

                    <p>Vemshala prohibits the posting of any information that infringes or violates the copyright rights and/or other intellectual property rights (including rights of privacy and publicity) of any person or entity. If you believe that your intellectual property right (or such a right that you are responsible for enforcing) is infringed by any content on the Site, please write to Vemshala at the address shown below, giving a written statement that contains: (a) identification of the copyrighted work and/or intellectual property right claimed to have been infringed; (b) identification of the allegedly infringing material on the Site that is requested to be removed; (c) your name, address, and daytime telephone number, and an e-mail address if available; (d) a statement that you have a good faith belief that the use of the copyrighted work and/or exercise of the intellectual property right is not authorized by the owner, its agent, or the law; (e) a statement that the information in the notification is accurate, and, under penalty of perjury, that the signatory is authorized to act on behalf of the owner of the right that is allegedly infringed; and (f) the signature of the intellectual property right owner or someone authorized on the owner&rsquo;s behalf to assert infringement of the right. Vemshala will remove any posted submission that infringes the copyright or other intellectual property right of any person under various applicable laws, upon receipt of such a statement (or any statement). Under appropriate circumstances, persons who repeatedly submit infringing or unlawful material will be prohibited from posting further submissions.</p>

                    <h2><strong>6.Disclaimers</strong></h2>

                    <p>THE CONTENT AND FUNCTIONALITY ON THE SITE IS PROVIDED WITH THE UNDERSTANDING THAT VEMSHALA IS NOT HEREIN ENGAGED IN RENDERING PROFESSIONAL ADVICE ON SHOPPING TO YOU, NO SITE CONTENT IS INTENDED TO SERVE AS OR SHALL BE OTHER REGULATED ADVICE, AND THAT YOU SHALL REMAIN SOLELY RESPONSIBLE FOR YOUR USE OF ALL SITE CONTENT AND ACKNOWLEDGE THAT ANY RELIANCE UPON THE SITE CONTENT SHALL BE ENTIRELY AT YOUR SOLE OPTION AND RISK. ALL CONTENT AND FUNCTIONALITY ON THE SITE IS PROVIDED &ldquo;AS IS,&rdquo; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.VEMSHALA AND ITS THIRD-PARTY CONTENT PROVIDERS MAKE NO WARRANTIES, EXPRESS OR IMPLIED, AS TO THE OWNERSHIP, ACCURACY, OR ADEQUACY OF THE SITE CONTENT. VEMSHALA SHALL HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY INFORMATION PUBLISHED ON LINKED WEBSITES, CONTAINED IN ANY USER SUBMISSIONS PUBLISHED ON THE SITE, OR PROVIDED BY THIRD PARTIES. NEITHER VEMSHALA NOR ITS THIRD-PARTY CONTENT PROVIDERS SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES OR LOSSES OR FOR LOST REVENUES OR PROFITS, WHETHER OR NOT ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR LOSSES AND REGARDLESS OF THE THEORY OF LIABILITY.</p>

                    <h2><strong>7.Indemnification</strong></h2>

                    <p>You hereby indemnify, defend, and hold harmless Vemshala and all of its predecessors, successors, parents, subsidiaries, affiliates, officers, directors, shareholders, investors, employees, agents, representatives, and attorneys and their respective heirs, successors, and assigns (&ldquo;Vemshala Indemnified Parties&rdquo;) from and against any and all liability, expenses, costs, or other losses (&ldquo;Losses&rdquo;) incurred by Vemshala and/or Vemshala Indemnified Parties in connection to any claims arising out of your use of the Site and/or any breach by you of these Terms, including the representations, warranties and covenants you made, if any, by agreeing to these Term. Vemshala reserves the right to assume, at its own expense, the exclusive defense and control of any matter otherwise subject to indemnification by you.</p>

                    <h2><strong>8.Third-party websites &amp; Providers</strong></h2>

                    <p>We may provide links to third-party websites, and some of the content appearing to be on this Site is in fact supplied, supported, or provided directly or indirectly by third parties, for example, in instances of framing of third-party websites or incorporation through framesets of content supplied by third-party servers. Vemshala has no responsibility for these third-party websites, which are governed by the terms of use and privacy policies, if any, of the applicable third-party content providers.</p>

                    <h2><strong>9.Governing law; jurisdiction</strong></h2>

                    <p>These Terms are governed by the laws of the Republic of India without reference to the principles of conflicts of laws thereof. The jurisdiction shall be Gurugram for all purposes.</p>

                </MainBox>

            </div>

           
        </>
    )
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Terms)
