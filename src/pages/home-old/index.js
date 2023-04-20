import Image from "next/image";
import cs from ".//components/home.module.css";
import {useState} from "react";

const HomePage = () => {
    const [email, setEmail] = useState("");
    return (
        <div className={cs.dd}>
            <div>
                <div className={cs.logoo}>
                    <Image src="/logo.png" alt="My Logo" width="105" height="63"/>
                </div>
                <div className={cs.poly1}>
                    <Image src="/polygon1.png" alt="My Logo" width="49" height="49"/>
                </div>
                <div className={cs.offertable}>
                    <Image src="/offer.png" alt="My Logo" width="636" height="351"/>
                </div>

                <div className={cs.line3}>
                    <Image src="/group3.png" alt="My Logo" width="300" height="653"/>
                </div>
                <div className={cs.group4}>
                    <Image src="/group4.png" alt="My Logo" width="400" height="799"/>
                </div>

                <div className={cs.poly2}>
                    <Image src="/polygon2.png" alt="My Logo" width="49" height="49"/>
                </div>
                <div className={cs.poly3}>
                    <Image src="/polygon3.png" alt="My Logo" width="35" height="35"/>
                </div>
                <div className={cs.reddot}>
                    <Image src="/reddot.png" alt="My Logo" width="11" height="11"/>
                </div>
                <div className={cs.yellowdot}>
                    <Image src="/yellowdot.png" alt="My Logo" width="11" height="11"/>
                </div>

                <div className={cs.group}>
                    <Image src="/frame11.svg" alt="My Logo" width="241" height="251"/>
                </div>
                <div className={cs.group1}>
                    <Image src="/group.png" alt="My Logo" width="172" height="172"/>
                </div>
                <div className={cs.group2}>
                    <Image src="/group2.png" alt="My Logo" width="172" height="172"/>
                </div>
                <div className={cs.hero}>
                    <Image src="/hero.png" alt="My Logo" width="657" height="515"/>
                </div>
                <div className={cs.rectangle}>
                    <Image
                        src="/rectangle1182.png"
                        alt="My Logo"
                        width="943"
                        height="303"
                    />
                </div>

                <div className={cs.back2}>
                    <Image src="/back2.png" alt="My Logo" width="1412" height="510"/>
                </div>
                <div className={cs.back3}>
                    <Image src="/back3.png" alt="My Logo" width="1412" height="510"/>
                </div>

                <div className={cs.topi}>
                    <Image src="/back.png" alt="My Logo" width="1412" height="910"/>
                </div>
                <div className={cs.girl}>
                    <Image src="/girll.png" alt="My Logo" width="327" height="433"/>
                </div>
                <div className={cs.last}>
                    <Image src="/last1.png" alt="My Logo" width="860" height="515"/>
                </div>

                <h1 className={cs.head}>Love Mondays Again</h1>
                <div>
                    <p className={cs.para}>
                        Match with great employers - no applying, no stress, just quality
                        opportunities.
                    </p>
                </div>
                <h1 className={cs.para2}>
                    First 500 sign-ups get a FREE $250 Resume Assessment.
                </h1>
                <form>
                    <div>
                        <input
                            className={cs.inp1}
                            value={email}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address..."
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                console.log(email);
                            }}
                            className={cs.b1}
                            type="button"
                        >
                            Count me in
                        </button>
                    </div>
                    <div>
                        <div>
                            <p className={cs.para3}>
                                Enjoy Mondays again! Join our pre-launch list and take the
                                first step to a better career.
                            </p>
                        </div>
                        <div>
                            <div className={cs.box1}></div>
                            <div className={cs.box2}></div>
                            <div className={cs.box3}></div>
                            <div className={cs.box4}></div>
                            <div className={cs.box5}></div>
                            <div className={cs.box6}></div>
                            <div>
                                <button className={cs.btn1}>1</button>
                                <button className={cs.btn2}>2</button>
                                <button className={cs.btn3}>3</button>
                                <button className={cs.btn4}>4</button>
                                <button className={cs.btn5}>5</button>
                                <button className={cs.btn6}>6</button>
                            </div>
                        </div>
                        <h1 className={cs.h2}>6 Reasons to Enjoy Mondays</h1>
                        <div>
                            <p className={cs.p1}>
                                Goodbye Sunday Scaries, hello dream job! We&apos;re making
                                finding a new career fun again.
                            </p>
                        </div>

                        <h1 className={cs.no}>NO MORE APPLYING</h1>
                        <div>
                            <p className={cs.create}>
                                Create your profile and career wishlist and you&apos;re done!
                                Employers will match with and reach out to you.
                            </p>
                        </div>
                        <h1 className={cs.feel}>FEEL VALUED</h1>
                        <div>
                            <p className={cs.match}>
                                Match with great employers and get opportunities that align
                                with your expertise, and match 95% of your wants and desires
                                in a dream career.
                            </p>
                        </div>
                        <h1 className={cs.design}>DESIGNED BY EXPERTS</h1>
                        <div>
                            <p className={cs.from}>
                                From resume assessments to strategies, get top-notch career
                                advice throughout the entire process to help you land your
                                dream role.
                            </p>
                        </div>
                        <h1 className={cs.get1}>GET MORE RESPONSES</h1>
                        <div>
                            <p className={cs.nofeel}>
                                No more feeling ghosted by job recruiters! Get actual
                                responses by motivated hiring managers. and hear back from
                                them more often.
                            </p>
                        </div>
                        <h1 className={cs.hassle}>HASSLE-FREE</h1>
                        <div>
                            <p className={cs.nomore}>
                                No more wasted time speaking with recruiters. From researching
                                the employer the job application to the hiring process,
                                everything’s easy, efficient and transparent.
                            </p>
                        </div>
                        <div>
                            <h1 className={cs.full}>FULL SUPPORT</h1>
                            <p className={cs.get}>
                                Get recruiter customer support and helpful job tips from our
                                resource center team so you can finally Enjoy Mondays again.
                            </p>
                        </div>

                        <h1 className={cs.who}>Who uses Enjoy Mondays</h1>

                        <div>
                            <h1 className={cs.claim}>
                                Claim your free resume assessment now
                            </h1>
                            <p className={cs.upgrade}>
                                Upgrade your job search game and get a free $250 resume
                                appraisal today.
                            </p>
                            <div>
                                <input
                                    className={cs.inp2}
                                    value={email}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email address..."
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <button
                                    onClick={() => {
                                        console.log(email);
                                    }}
                                    className={cs.b2}
                                    type="button"
                                >
                                    sign me up
                                </button>
                                <div>
                                    <div className={cs.footerr}>
                                        <Image
                                            src="/fot.png"
                                            alt="My Logo"
                                            width="1412"
                                            height="560"
                                        />
                                    </div>
                                    <div className={cs.endlogo}>
                                        <Image
                                            src="/endlogo.png"
                                            alt="My Logo"
                                            width="91"
                                            height="58"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            className={cs.inp3}
                                            type="text"
                                            id="text"
                                            name="text"
                                            placeholder="Enter your name"
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                        />
                                    </div>

                                    <input
                                        className={cs.inp4}
                                        type="text"
                                        id="text"
                                        name="text"
                                        placeholder="Enter your message"
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            <div>
                                                {/* <button
                    onClick={() => {
                      console.log();
                      console.log();
                    }}
                    className={cs.b3}
                    type="button"
                  >
                  Send your message
                  </button> */}
                                            </div>;
                                        }}
                                    />
                                    <div>
                                        <button className={cs.b3}>Send me message</button>
                                    </div>
                                    <p className={cs.social}>Social Media</p>

                                    <p className={cs.foot}>Got any questions?</p>
                                    <p className={cs.copyright}>
                                        © Copyright 2023. All rights reserved. Privacy policy.
                                    </p>

                                    <div className={cs.follow}>
                                        <Image
                                            src="/follow.svg"
                                            alt="My Logo"
                                            width="314"
                                            height="58"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
