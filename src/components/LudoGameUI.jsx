import React from 'react';
import { useNavigate } from "react-router-dom";

const LudoGameUI = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* NOTE: Ideally, place these <link> tags in your public/index.html file. 
        I have included them here so the component renders correctly immediately.
      */}
            <style>
                {`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

        /* Helper for body simulation in React */
        .ludo-body-wrapper {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            font-family: 'Nunito', sans-serif;
            -webkit-tap-highlight-color: transparent;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            user-select: none;
        }

        /* --- Main Phone Container --- */
        .app-container {
            width: 100%;
            max-width: 414px;
            height: 100%;
            max-height: 896px;
            /* Deep Purple/Magenta Gradient */
            background: radial-gradient(circle at 50% 30%, #6a1b9a 0%, #38006b 50%, #12001f 100%);
            position: relative;
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 0 20px rgba(0,0,0,0.5);
        }

        /* --- The Architectural Arch Background --- */
        .arch-bg {
            position: absolute;
            top: 18%;
            left: 50%;
            transform: translateX(-50%);
            width: 88%;
            height: 75%;
            /* Purple Border */
            border: 25px solid rgba(120, 60, 120, 0.15);
            border-bottom: none;
            border-radius: 200px 200px 0 0;
            pointer-events: none;
            z-index: 0;
            box-shadow: inset 0 10px 20px rgba(0,0,0,0.6), 
                        0 5px 15px rgba(0,0,0,0.2);
        }

        /* --- Top Header (Status Bar) --- */
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 15px 5px 15px;
            z-index: 10;
        }

        .profile-section {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        /* Profile Ring */
        .avatar-ring {
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: conic-gradient(#00ffd5, #008cff, #00ffd5);
            padding: 2px;
            position: relative;
        }

        .avatar {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #222;
            overflow: hidden;
        }
        
        .avatar-ring::after {
            content: '';
            position: absolute;
            top: 0; right: 0;
            width: 10px; height: 10px;
            background: #ff5722;
            border-radius: 50%;
            border: 1px solid #fff;
        }

        .volume-icon {
            background: rgba(0,0,0,0.3);
            width: 30px; height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 14px;
        }

        .currency-bar {
            display: flex;
            gap: 8px;
        }

        .currency {
            background: rgba(0, 0, 0, 0.6);
            border-radius: 20px;
            padding: 2px 8px 2px 4px;
            display: flex;
            align-items: center;
            color: #fff;
            font-weight: 800;
            font-size: 13px;
            border: 1px solid rgba(255,255,255,0.1);
        }

        .currency i { margin-right: 5px; font-size: 14px;}
        .currency .plus { color: #ffd700; margin-left: 5px; font-size: 14px; cursor: pointer;}

        .settings-btn {
            color: #aeb5c0;
            font-size: 22px;
            margin-left: 5px;
            filter: drop-shadow(0 2px 2px rgba(0,0,0,0.5));
        }

        /* --- Top Actions --- */
        .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 10px 20px;
            z-index: 10;
        }

        .left-actions { display: flex; gap: 20px; }

        .icon-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            font-size: 11px;
            font-weight: 700;
            text-shadow: 0 1px 3px rgba(0,0,0,0.8);
            cursor: pointer;
            transition: transform 0.1s;
        }
        .icon-btn:active { transform: scale(0.95); }

        .icon-btn img {
            width: 38px;
            height: 38px;
            margin-bottom: 2px;
            filter: drop-shadow(0 4px 3px rgba(0,0,0,0.4));
        }

        /* --- Main Game Modes Grid --- */
        .main-content {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            gap: 10px 20px; 
            padding: 10px 30px;
            justify-items: center;
            align-items: center;
            z-index: 5;
            margin-top: 10px;
        }

        .mode-card {
            position: relative;
            width: 140px;
            height: 150px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
        }

        .pedestal {
            position: absolute;
            bottom: 25px;
            width: 120px;
            height: 45px;
            border-radius: 50%;
            transform: rotateX(50deg);
            z-index: 1;
            border: 2px solid rgba(255,255,255,0.15);
        }

        .p-green { 
            background: radial-gradient(circle, #66bb6a 0%, #2e7d32 100%);
            box-shadow: 0 8px 0 #1b5e20, 0 8px 10px rgba(0,0,0,0.5); 
        }
        .p-purple { 
            background: radial-gradient(circle, #ba68c8 0%, #7b1fa2 100%);
            box-shadow: 0 8px 0 #4a148c, 0 8px 10px rgba(0,0,0,0.5);
        }
        .p-blue { 
            background: radial-gradient(circle, #4fc3f7 0%, #0288d1 100%);
            box-shadow: 0 8px 0 #01579b, 0 8px 10px rgba(0,0,0,0.5);
        }
        .p-red { 
            background: radial-gradient(circle, #ef5350 0%, #c62828 100%);
            box-shadow: 0 8px 0 #b71c1c, 0 8px 10px rgba(0,0,0,0.5);
        }

        .character-img {
            position: absolute;
            bottom: 50px;
            width: 100px;
            height: 90px;
            object-fit: contain;
            filter: drop-shadow(0 5px 5px rgba(0,0,0,0.5));
            z-index: 2;
            transition: transform 0.2s;
        }
        
        .mode-card:active .character-img {
            transform: scale(0.95) translateY(5px);
        }

        .label-btn {
            background: linear-gradient(to bottom, #ffca28 0%, #f57c00 100%);
            color: #fff;
            padding: 8px 0;
            width: 110px;
            border-radius: 20px;
            font-size: 15px;
            font-weight: 800;
            text-align: center;
            text-shadow: 0 1px 2px rgba(160, 0, 0, 0.5);
            border: 2px solid #fff;
            box-shadow: 0 4px 6px rgba(0,0,0,0.4);
            z-index: 3;
            position: relative;
        }

        /* --- Footer Navigation --- */
        footer {
            height: 85px;
            background: linear-gradient(to top, #0f021a 0%, #0f021a 40%, transparent 100%);
            display: flex;
            justify-content: space-around;
            align-items: flex-end;
            padding-bottom: 15px;
            z-index: 20;
        }

        .nav-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: white;
            font-size: 11px;
            font-weight: 700;
            opacity: 0.9;
            cursor: pointer;
            width: 70px;
        }

        .nav-item img {
            width: 45px;
            height: 45px;
            margin-bottom: -2px;
            filter: drop-shadow(0 4px 4px rgba(0,0,0,0.5));
        }
        
        .nav-item.chat img {
            background: #6a1b9a;
            border-radius: 12px;
            padding: 5px;
            border: 2px solid #ab47bc;
        }

        /* Sparkles */
        .sparkle {
            position: absolute;
            background: white;
            border-radius: 50%;
            opacity: 0;
            animation: twinkle 3s infinite ease-in-out;
            box-shadow: 0 0 5px 1px white;
        }
        @keyframes twinkle {
            0% { opacity: 0; transform: scale(0.5); }
            50% { opacity: 0.8; transform: scale(1.2); }
            100% { opacity: 0; transform: scale(0.5); }
        }
        `}
            </style>

            <div className="ludo-body-wrapper">
                <div className="app-container">

                    <div className="arch-bg"></div>

                    <div className="sparkle" style={{ width: '3px', height: '3px', top: '15%', left: '15%', animationDelay: '0s' }}></div>
                    <div className="sparkle" style={{ width: '2px', height: '2px', top: '25%', left: '85%', animationDelay: '1s' }}></div>
                    <div className="sparkle" style={{ width: '3px', height: '3px', top: '10%', left: '50%', animationDelay: '1.5s' }}></div>
                    <div className="sparkle" style={{ width: '2px', height: '2px', top: '40%', left: '10%', animationDelay: '0.5s' }}></div>

                    <header>
                        <div className="profile-section">
                            <div className="avatar-ring">
                                <div className="avatar"></div>
                            </div>
                            <div className="volume-icon">
                                <i className="fa-solid fa-volume-high"></i>
                            </div>
                        </div>

                        <div className="currency-bar">
                            <div className="currency">
                                <i className="fa-solid fa-star" style={{ color: '#ffd700' }}></i> 0 <span className="plus">+</span>
                            </div>
                            <div className="currency">
                                <i className="fa-solid fa-coins" style={{ color: '#ffd700' }}></i> 4.0K <span className="plus">+</span>
                            </div>
                        </div>

                        <i className="fa-solid fa-gear settings-btn"></i>
                    </header>

                    <nav className="top-nav">
                        <div className="left-actions">
                            <div className="icon-btn">
                                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png" alt="Task" />
                                <span>Task</span>
                            </div>
                            <div className="icon-btn">
                                <img src="https://cdn-icons-png.flaticon.com/512/9497/9497087.png" alt="Chest" />
                                <span>Chest</span>
                            </div>
                        </div>

                        <div className="icon-btn">
                            <img src="https://cdn-icons-png.flaticon.com/512/4207/4207247.png" alt="Hello Yo" />
                            <span>Hello Yo</span>
                        </div>
                    </nav>

                    <main className="main-content">

                        <div className="mode-card" style={{ position: 'relative', width: '140px', height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', fontFamily: 'Nunito, sans-serif' }}>

                            {/* 3D Base for Online */}
                            <div style={{
                                position: 'absolute',
                                bottom: '25px',
                                width: '120px',
                                height: '45px',
                                borderRadius: '50%',
                                transform: 'rotateX(50deg)',
                                border: '2px solid rgba(255,255,255,0.1)',
                                background: 'radial-gradient(circle at center, #2e7d32 0%, #000 100%)',
                                boxShadow: '0 8px 0 #003300, 0 0 15px rgba(0, 255, 100, 0.2)',
                                zIndex: 1
                            }}></div>

                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055823.png" alt="Blue Dice" style={{
                                position: 'absolute',
                                bottom: '55px',
                                left: '20px',
                                width: '50px',
                                height: '50px',
                                filter: 'hue-rotate(210deg) brightness(1.2) drop-shadow(0 5px 5px rgba(0,0,0,0.5))',
                                opacity: 0.9,
                                zIndex: 2,
                                transform: 'rotate(-15deg)'
                            }} />

                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055823.png" alt="Purple Dice" style={{
                                position: 'absolute',
                                bottom: '55px',
                                right: '20px',
                                width: '45px',
                                height: '45px',
                                filter: 'hue-rotate(280deg) brightness(1.1) drop-shadow(0 5px 5px rgba(0,0,0,0.5))',
                                opacity: 0.85,
                                zIndex: 2,
                                transform: 'rotate(15deg)'
                            }} />

                            <img src="https://cdn-icons-png.flaticon.com/512/1055/1055823.png" alt="Red Dice" style={{
                                position: 'absolute',
                                bottom: '35px',
                                width: '60px',
                                height: '60px',
                                filter: 'brightness(1.1) saturate(1.2) drop-shadow(0 8px 8px rgba(0,0,0,0.6))',
                                zIndex: 3
                            }} />

                            <div style={{
                                position: 'absolute',
                                bottom: '60px',
                                left: '40px',
                                width: '4px',
                                height: '4px',
                                background: 'white',
                                borderRadius: '50%',
                                boxShadow: '0 0 10px 2px white',
                                zIndex: 4,
                                opacity: 0.8
                            }}></div>

                           <div
                                onClick={() => navigate("/reward")}
                                className="
        label-btn
        cursor-pointer
        select-none
      "
                            >
                                Online
                            </div>
                        </div>

                        <div className="mode-card">
                            <div className="pedestal p-purple"></div>
                            <img src="https://cdn-icons-png.flaticon.com/512/9466/9466848.png" className="character-img" style={{ width: '80px' }} alt="Friends" />
                            <div
                                onClick={() => navigate("/reward")}
                                className="
        label-btn
        cursor-pointer
        select-none
      "
                            >
                                Friends
                            </div>
                        </div>

                        <div className="mode-card">
                            <div className="pedestal p-blue"></div>
                            <img src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" className="character-img" alt="Robot" />
                            <div
                                onClick={() => navigate("/reward")}
                                className="
        label-btn
        cursor-pointer
        select-none
      "
                            >
                                Computer
                            </div>
                        </div>

                        <div className="mode-card" style={{ position: 'relative', width: '140px', height: '160px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end' }}>

                            <div className="pedestal" style={{
                                position: 'absolute',
                                bottom: '25px',
                                width: '120px',
                                height: '45px',
                                borderRadius: '50%',
                                transform: 'rotateX(50deg)',
                                background: 'radial-gradient(circle, #ff5252 0%, #b71c1c 90%)',
                                boxShadow: '0 8px 0 #7f0000, 0 10px 15px rgba(0,0,0,0.5)',
                                border: '2px solid rgba(255,255,255,0.1)'
                            }}></div>

                            <img src="https://pngimg.com/d/crown_PNG15.png" alt="VIP" style={{
                                position: 'absolute',
                                bottom: '40px',
                                width: '125px',
                                height: 'auto',
                                objectFit: 'contain',
                                filter: 'drop-shadow(0 8px 8px rgba(0,0,0,0.5))',
                                zIndex: 2
                            }} />

                           <div
                                onClick={() => navigate("/reward")}
                                className="
        label-btn
        cursor-pointer
        select-none
      "
                            >
                                VIP Member
                            </div>
                        </div>

                    </main>

                    <footer>
                        <div className="nav-item chat">
                            <img src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png" style={{ width: '30px', height: '30px', background: 'transparent', border: 'none', filter: 'brightness(100)' }} alt="Chat" />
                            <span style={{ marginTop: '5px' }}>Chat Room</span>
                        </div>
                        <div className="nav-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/3300/3300833.png" alt="People" />
                            <span>People</span>
                        </div>
                        <div className="nav-item">
                            <img src="https://cdn-icons-png.flaticon.com/512/726/726623.png" alt="Invite" />
                            <span>Invite</span>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default LudoGameUI;