import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Logo from '../assets/img/logo.svg';
import swap_title from '../assets/img/swap-title-logo.png';
import icon_1 from '../assets/img/icon/1.svg'
import icon_2 from '../assets/img/icon/2.svg'
import icon_3 from '../assets/img/icon/3.svg'
import icon_4 from '../assets/img/icon/4.svg'
import icon_5 from '../assets/img/icon/5.svg'
import icon_6 from '../assets/img/icon/6.svg'
import icon_7 from '../assets/img/icon/7.svg'
import icon_8 from '../assets/img/icon/8.svg'
import icon_9 from '../assets/img/icon/9.svg'



const ConnectSwap = () => {
    const swapItem = [
        {
            icon: icon_1,
            title: 'ETH'
        },
        {
            icon: icon_2,
            title: 'ORDI'
        },
        {
            icon: icon_3,
            title: 'AVAX'
        },
        {
            icon: icon_4,
            title: 'ARB'
        },
        {
            icon: icon_5,
            title: 'BASE'
        },
        {
            icon: icon_6,
            title: 'BRC'
        },
        {
            icon: icon_7,
            title: 'POLY'
        },
    ];
    const tokenItem = [
        {
            icon: icon_2,
            title: 'ORDI',
            available: 0,
        },
        {
            icon: icon_8,
            title: 'TRAC',
            available: 0,
        },
        {
            icon: icon_9,
            title: 'MEME',
            available: 0,
        },

    ];
    const [show, setShow] = useState(false);
    const [showTwo, setShowTwo] = useState(false);
    const [swapShow, setSwapShow] = useState(false);

    const [itemSelected, setItemSelected] = useState({ icon: swapItem[0].icon, title: swapItem[0].title });
    const [tokenActive, setTokenActive] = useState({ icon: tokenItem[0].icon, title: tokenItem[0].title });

    const handleClick = (item) => {
        setShow(false);
        setItemSelected(item);
    };
    const handleClickTwo = (item) => {
        setShowTwo(false);
        setTokenActive(item);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseTwo = () => setShowTwo(false);
    const handleShowTwo = () => setShowTwo(true);

    const swapHandleClose = () => setSwapShow(false);
    const swapHandleShow = () => setSwapShow(true);

    const [connectText, setConnectText] = useState('Connect Wallet');
    const [isConnect, setIsConnect] = useState(false);
    const [href, setHref] = useState('');
    const currentLocation = useLocation().pathname;

    useEffect(() => {
        if (currentLocation === '/dashboard') {
            setIsConnect(true);
            setHref('/wallet');
        } else if (currentLocation === '/wallet') {
            setIsConnect(true);
            setHref('/swap');
            setConnectText('Searching Prices')
        } else if (currentLocation === '/swap') {
            setIsConnect(false);
            setConnectText('Swap')
        }
    }, [currentLocation])


    return (
        <>
            <div className="buy-connect mx-auto">
                <div className="buy-connect-single d-flex justify-content-between">
                    <div className="buy-connect-single-left">
                        <p>Spend Amount</p>
                        <input type="text" className='d-block bg-transparent border-0 p-0' defaultValue={'2E'} />
                    </div>
                    <div className="buy-connect-single-right">
                        <Button onClick={handleShow} className='buy-exchange'>
                            <img src={itemSelected.icon} alt="" />
                            <span>{itemSelected.title}</span>
                        </Button>
                        <p className="balance text-end">Balance: 0</p>
                    </div>
                </div>
                <button className="data-icon d-flex align-items-center justify-content-center">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_1847)">
                            <path d="M1.61906 11.8332C1.29504 11.8332 1.00426 12.0322 0.886792 12.3341C0.769329 12.6361 0.849282 12.9792 1.08813 13.1982L7.37384 18.96C7.60352 19.1706 7.93593 19.2255 8.22114 19.1001C8.50635 18.9746 8.69047 18.6924 8.69047 18.3809L8.69047 1.61898C8.69047 1.18504 8.3387 0.833268 7.90476 0.833268C7.47082 0.833268 7.11905 1.18504 7.11905 1.61898V11.8332H1.61906Z" fill="#F1F1F7" />
                            <path d="M18.3809 8.16659L12.8809 8.16659V18.3809C12.8809 18.8148 12.5292 19.1666 12.0952 19.1666C11.6613 19.1666 11.3095 18.8148 11.3095 18.3809L11.3095 1.61898C11.3095 1.30739 11.4936 1.02524 11.7789 0.899779C12.0641 0.774316 12.3965 0.829241 12.6262 1.03979L18.9119 6.80168C19.1507 7.02063 19.2307 7.36374 19.1132 7.66571C18.9957 7.96769 18.7049 8.16659 18.3809 8.16659Z" fill="#F1F1F7" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1847">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div className="buy-connect-single d-flex justify-content-between align-items-center">
                    <div className="buy-connect-single-left">
                        <span className="d-block second-span">BRC-20 ASSETS</span>
                    </div>
                    <div className="buy-connect-single-right">
                        <Button onClick={handleShowTwo} className='buy-exchange my-0'>
                            <img src={tokenActive.icon} alt="" />
                            <span>{tokenActive.title}</span>
                        </Button>
                    </div>
                </div>
                <div className="buy-connect-single last-padding d-flex  justify-content-between align-items-center">
                    <p className="p2">Receiving Address:</p>
                    <p className="p2">0x54B2...8F732c</p>
                </div>
                <div className="buy-connect-btn">
                    {currentLocation === '/swap' ? <Button onClick={swapHandleShow} className='primary-btn border-0 cursor-pointer'>{connectText}</Button> : isConnect ? (<Link className="primary-btn cursor-pointer" to={href}>{connectText}</Link>) : <button className="primary-btn">{connectText}</button>}
                </div>
            </div>
            <Modal className='buy-modal' centered size='md' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Network</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>
                    <ul className="items d-grid gap-2 gap-sm-3 pb-4">
                        {swapItem.map((item, index) => (
                            <li className="d-flex align-items-center gap-2" key={index} onClick={() => handleClick(item)}>
                                <img src={item.icon} alt="" />
                                <span>{item.title}</span>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
            {/* end */}
            <Modal className='buy-modal' centered size='md' show={showTwo} onHide={handleCloseTwo}>
                <Modal.Header closeButton>
                    <Modal.Title>Select Token</Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-2'>
                    <ul className="items-token d-grid gap-2 gap-sm-3">
                        <li><input type="text" className="form-control" placeholder='Search name or paste address' /></li>
                        {tokenItem.map((item, index) => (
                            <li className="d-flex align-items-center gap-2 justify-content-between" key={index} onClick={() => handleClickTwo(item)}>
                                <div className="d-flex align-items-center gap-2">
                                    <img src={item.icon} alt="" />
                                    <span>{item.title}</span>
                                </div>
                                <h6 className='mb-0 fw-normal'>{item.available}</h6>
                            </li>
                        ))}
                    </ul>
                </Modal.Body>
            </Modal>
            {/* swap modal */}
            <Modal className='swap-modal' centered size='md' show={swapShow} onHide={swapHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className="logo">
                            <img src={Logo} alt="" width='142' height='35' />
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-2'>
                    <div className="content d-flex align-items-center justify-content-center flex-column">
                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32" cy="32" r="32" fill="#FE7024" />
                            <circle cx="32" cy="32" r="31.5" stroke="white" strokeOpacity="0.5" />
                            <path d="M25.2038 22.0884C25.2003 22.1021 25.1961 22.1158 25.1914 22.1295" stroke="white" strokeWidth="2.3165" />
                            <path d="M25.777 22.9612L18.5574 27.3473C18.5462 27.354 18.5369 27.3638 18.5304 27.3755C18.5239 27.3872 18.5205 27.4006 18.5205 27.4142C18.5205 27.4277 18.5239 27.4411 18.5304 27.4528C18.5369 27.4646 18.5462 27.4743 18.5574 27.481L24.5668 31.1327C24.6371 31.1755 24.7168 31.1981 24.7977 31.1981C24.8786 31.1981 24.9579 31.1755 25.0276 31.1327L29.6459 28.3253" stroke="white" strokeWidth="2.3165" />
                            <path d="M30.1348 29.0952L25.3599 31.9906C25.3155 32.0174 25.2786 32.0559 25.253 32.1022C25.2273 32.1485 25.2138 32.201 25.2139 32.2543L25.2156 39.5798C25.2157 39.6012 25.2211 39.6222 25.2313 39.6407C25.2415 39.6592 25.2561 39.6746 25.2737 39.6854C25.2912 39.6961 25.3112 39.7018 25.3315 39.7019C25.3518 39.702 25.3718 39.6966 25.3895 39.686L30.2478 36.7284" stroke="white" strokeWidth="2.3165" />
                            <path d="M30.43 37.6715L24.9423 41.0028C24.8931 41.0328 24.8372 41.0486 24.7801 41.0486C24.7231 41.0486 24.6668 41.0328 24.6171 41.0028C22.6151 39.7941 20.5836 38.5603 18.5225 37.3016C18.4982 37.2857 18.4698 37.2918 18.4373 37.3199C18.4286 37.3276 18.4223 37.3376 18.4191 37.3488C18.416 37.3599 18.4163 37.3716 18.4199 37.3821L21.4576 46.6269C21.4685 46.6593 21.4878 46.6878 21.5133 46.7091C21.5389 46.7305 21.5696 46.7439 21.602 46.7478L30.1344 47.7843" stroke="white" strokeWidth="2.3165" />
                            <path d="M18.12 28.2823C18.1078 28.2749 18.094 28.271 18.0799 28.271C18.0659 28.271 18.052 28.2749 18.0399 28.2824C18.0277 28.2898 18.0176 28.3005 18.0106 28.3133C18.0036 28.3262 18 28.3407 18 28.3555L18.0017 35.8678C18.0017 35.8826 18.0054 35.8972 18.0124 35.9101C18.0194 35.923 18.0295 35.9336 18.0417 35.9411L24.2268 39.6917C24.2389 39.6991 24.2528 39.703 24.2668 39.703C24.2809 39.703 24.2947 39.6991 24.3069 39.6916C24.319 39.6842 24.3291 39.6735 24.3361 39.6607C24.3431 39.6478 24.3468 39.6333 24.3467 39.6185L24.3363 32.1208C24.3361 32.1063 24.3322 32.0921 24.3252 32.0796C24.3182 32.0671 24.3083 32.0567 24.2963 32.0494L18.12 28.2823Z" stroke="white" strokeWidth="2.3165" />
                            <path d="M30.1367 47.7836C32.3462 48.0412 34.5597 48.3061 36.7773 48.5784C36.8585 48.5882 36.924 48.5888 36.9738 48.5802C37.0352 48.5693 37.0387 48.5473 36.9842 48.5143L31.2287 45.0347C31.2168 45.0275 31.2069 45.0171 31.2 45.0045C31.1931 44.992 31.1895 44.9778 31.1895 44.9633C31.1895 44.9488 31.1931 44.9346 31.2 44.922C31.2069 44.9095 31.2168 44.8991 31.2287 44.8919L45.4454 36.2588C45.4566 36.2521 45.4659 36.2423 45.4724 36.2306C45.4789 36.2189 45.4823 36.2055 45.4823 36.1919C45.4823 36.1784 45.4789 36.165 45.4724 36.1533C45.4659 36.1415 45.4566 36.1318 45.4454 36.1251L39.4221 32.4642C39.3561 32.4246 39.2813 32.404 39.2054 32.4043C39.1294 32.4046 39.0548 32.4259 38.9891 32.466L30.4323 37.6708" stroke="white" strokeWidth="2.3165" />
                            <path d="M30.2468 36.7258L38.6054 31.6456C38.6552 31.6149 38.6964 31.5713 38.7251 31.5189C38.7538 31.4665 38.7689 31.4073 38.7688 31.3471L38.7706 24.0436C38.7706 24.0226 38.7653 24.002 38.7553 23.9839C38.7453 23.9657 38.7309 23.9507 38.7136 23.9402C38.6963 23.9298 38.6767 23.9244 38.6568 23.9246C38.6369 23.9247 38.6173 23.9304 38.6002 23.941L30.1338 29.0927" stroke="white" strokeWidth="2.3165" />
                            <path d="M29.6462 28.3289L39.0481 22.6113C39.102 22.5785 39.1631 22.5613 39.2251 22.5613C39.2871 22.5613 39.3478 22.5785 39.4011 22.6113L45.3861 26.2521C45.5461 26.3498 45.596 26.3064 45.5357 26.1221L42.5501 17.0513C42.5318 16.9959 42.4991 16.947 42.4557 16.9104C42.4123 16.8738 42.36 16.8509 42.3049 16.8444L27.2119 15.0093C26.9453 14.9764 26.9279 15.0307 27.1597 15.1723L32.7327 18.5567C32.7474 18.5657 32.7596 18.5787 32.7682 18.5942C32.7768 18.6097 32.7814 18.6272 32.7816 18.645C32.7818 18.6628 32.7775 18.6802 32.7692 18.6956C32.761 18.711 32.7489 18.7237 32.7344 18.7325L25.7773 22.9648" stroke="white" strokeWidth="2.3165" />
                            <path d="M25.1914 22.1405C25.2528 22.1942 25.3172 22.2003 25.3844 22.1588C27.369 20.9367 29.2382 19.7982 30.9921 18.7433C31.0061 18.7348 31.0178 18.7225 31.026 18.7078C31.0342 18.6931 31.0386 18.6765 31.0388 18.6596C31.039 18.6427 31.0349 18.6261 31.027 18.6116C31.0191 18.597 31.0077 18.585 30.9939 18.5766L25.3149 15.1227C25.2557 15.0873 25.2262 15.105 25.2262 15.1758L25.2036 22.1002" stroke="white" strokeWidth="2.3165" />
                            <path d="M45.8556 35.3159C45.8694 35.3242 45.885 35.3286 45.9008 35.3286C45.9167 35.3286 45.9323 35.3242 45.946 35.3159C45.9598 35.3075 45.9712 35.2955 45.9791 35.281C45.9871 35.2666 45.9913 35.2502 45.9913 35.2334L45.9843 27.7267C45.9843 27.71 45.9801 27.6936 45.9722 27.6791C45.9642 27.6646 45.9528 27.6526 45.9391 27.6443L39.7802 23.9266C39.7664 23.9182 39.7508 23.9138 39.735 23.9138C39.7191 23.9138 39.7035 23.9182 39.6898 23.9266C39.676 23.9349 39.6646 23.9469 39.6567 23.9614C39.6487 23.9759 39.6445 23.9923 39.6445 24.009L39.648 31.481C39.648 31.4977 39.6522 31.5141 39.6601 31.5286C39.6681 31.543 39.6795 31.555 39.6932 31.5634L45.8556 35.3159Z" stroke="white" strokeWidth="2.3165" />
                            <path d="M38.6372 48.4706C38.6512 48.4793 38.6672 48.484 38.6836 48.4841C38.6999 48.4842 38.7159 48.4797 38.7301 48.4712C38.7442 48.4626 38.756 48.4502 38.7641 48.4353C38.7722 48.4204 38.7764 48.4035 38.7763 48.3863V41.5443C38.7764 41.5271 38.7722 41.5102 38.7641 41.4953C38.756 41.4804 38.7442 41.468 38.7301 41.4595C38.7159 41.4509 38.6999 41.4464 38.6836 41.4465C38.6672 41.4466 38.6512 41.4513 38.6372 41.4601L33.019 44.8811C33.0049 44.8896 32.9932 44.9018 32.9851 44.9166C32.9769 44.9314 32.9727 44.9482 32.9727 44.9653C32.9727 44.9824 32.9769 44.9992 32.9851 45.014C32.9932 45.0288 33.0049 45.0411 33.019 45.0496L38.6372 48.4706Z" stroke="white" strokeWidth="2.3165" />
                            <path d="M29.6459 28.3296L25.0276 31.1371C24.9579 31.1799 24.8786 31.2024 24.7977 31.2024C24.7168 31.2024 24.6371 31.1799 24.5668 31.1371L18.5574 27.4854C18.5462 27.4786 18.5369 27.4689 18.5304 27.4572C18.5239 27.4454 18.5205 27.4321 18.5205 27.4185C18.5205 27.4049 18.5239 27.3916 18.5304 27.3798C18.5369 27.3681 18.5462 27.3584 18.5574 27.3517L25.777 22.9655L32.7341 18.7332C32.7486 18.7244 32.7606 18.7117 32.7689 18.6963C32.7772 18.681 32.7815 18.6635 32.7813 18.6457C32.7811 18.6279 32.7765 18.6104 32.7679 18.5949C32.7593 18.5794 32.7471 18.5665 32.7324 18.5574L27.1594 15.1731C26.9276 15.0314 26.945 14.9771 27.2116 15.0101L42.3046 16.8451C42.3597 16.8516 42.412 16.8745 42.4554 16.9111C42.4988 16.9477 42.5315 16.9966 42.5498 17.052L45.5354 26.1228C45.5957 26.3072 45.5458 26.3505 45.3858 26.2528L39.4008 22.6121C39.3475 22.5793 39.2868 22.562 39.2248 22.562C39.1628 22.562 39.1017 22.5793 39.0478 22.6121L29.6459 28.3296Z" fill="#FE7024" />
                            <path d="M25.1914 22.1412C25.196 22.1278 25.2001 22.1144 25.2036 22.1009L25.2262 15.1765C25.2262 15.1057 25.2557 15.088 25.3149 15.1234L30.9939 18.5774C31.0077 18.5857 31.0191 18.5977 31.027 18.6123C31.0349 18.6269 31.039 18.6434 31.0388 18.6603C31.0386 18.6772 31.0342 18.6939 31.026 18.7086C31.0178 18.7232 31.0061 18.7355 30.9921 18.744C29.2382 19.7989 27.369 20.9374 25.3844 22.1595C25.3172 22.201 25.2528 22.1949 25.1914 22.1412Z" fill="#FE7024" />
                            <path d="M30.2478 36.7266L25.3895 39.6842C25.3718 39.6948 25.3518 39.7002 25.3315 39.7001C25.3112 39.7 25.2912 39.6943 25.2737 39.6836C25.2561 39.6728 25.2415 39.6574 25.2313 39.6389C25.2211 39.6204 25.2157 39.5994 25.2156 39.578L25.2139 32.2525C25.2138 32.1992 25.2273 32.1467 25.253 32.1004C25.2786 32.0541 25.3155 32.0156 25.3599 31.9888L30.1348 29.0934L38.6011 23.9418C38.6183 23.9311 38.6378 23.9254 38.6578 23.9253C38.6777 23.9252 38.6973 23.9306 38.7146 23.941C38.7319 23.9514 38.7463 23.9664 38.7563 23.9846C38.7663 24.0027 38.7715 24.0233 38.7715 24.0443L38.7698 31.3478C38.7698 31.408 38.7548 31.4672 38.7261 31.5196C38.6974 31.572 38.6561 31.6157 38.6063 31.6463L30.2478 36.7266Z" fill="#FE7024" />
                            <path d="M45.8556 35.3163L39.6932 31.5639C39.6795 31.5555 39.6681 31.5435 39.6601 31.529C39.6522 31.5146 39.648 31.4982 39.648 31.4815L39.6445 24.0095C39.6445 23.9928 39.6487 23.9764 39.6567 23.9619C39.6646 23.9474 39.676 23.9354 39.6898 23.927C39.7035 23.9187 39.7191 23.9143 39.735 23.9143C39.7508 23.9143 39.7664 23.9187 39.7802 23.9271L45.9391 27.6447C45.9528 27.6531 45.9642 27.6651 45.9722 27.6796C45.9801 27.694 45.9843 27.7104 45.9843 27.7272L45.9913 35.2339C45.9913 35.2506 45.9871 35.2671 45.9791 35.2815C45.9712 35.296 45.9598 35.308 45.946 35.3164C45.9323 35.3247 45.9167 35.3291 45.9008 35.3291C45.885 35.3291 45.8694 35.3247 45.8556 35.3163Z" fill="#FE7024" />
                            <path d="M18.12 28.283L24.2963 32.0501C24.3083 32.0574 24.3182 32.0678 24.3252 32.0803C24.3322 32.0928 24.3361 32.107 24.3363 32.1216L24.3467 39.6192C24.3468 39.634 24.3431 39.6486 24.3361 39.6614C24.3291 39.6743 24.319 39.6849 24.3069 39.6924C24.2947 39.6998 24.2809 39.7037 24.2668 39.7037C24.2528 39.7037 24.2389 39.6998 24.2268 39.6924L18.0417 35.9418C18.0295 35.9344 18.0194 35.9237 18.0124 35.9108C18.0054 35.898 18.0017 35.8834 18.0017 35.8685L18 28.3563C18 28.3415 18.0036 28.3269 18.0106 28.314C18.0176 28.3012 18.0277 28.2905 18.0399 28.2831C18.052 28.2757 18.0659 28.2717 18.0799 28.2717C18.094 28.2717 18.1078 28.2756 18.12 28.283Z" fill="#FE7024" />
                            <path d="M30.1344 47.786L21.602 46.7495C21.5696 46.7456 21.5389 46.7322 21.5133 46.7109C21.4878 46.6895 21.4685 46.661 21.4576 46.6286L18.4199 37.3839C18.4163 37.3733 18.416 37.3616 18.4191 37.3505C18.4223 37.3394 18.4286 37.3293 18.4373 37.3216C18.4698 37.2935 18.4982 37.2874 18.5225 37.3033C20.5836 38.562 22.6151 39.7958 24.6171 41.0045C24.6668 41.0345 24.7231 41.0504 24.7801 41.0504C24.8372 41.0504 24.8931 41.0345 24.9423 41.0045L30.43 37.6732L38.9868 32.4685C39.0525 32.4283 39.1271 32.4071 39.2031 32.4067C39.279 32.4064 39.3537 32.4271 39.4198 32.4666L45.4431 36.1275C45.4543 36.1343 45.4636 36.144 45.4701 36.1557C45.4766 36.1675 45.48 36.1808 45.48 36.1944C45.48 36.208 45.4766 36.2213 45.4701 36.233C45.4636 36.2448 45.4543 36.2545 45.4431 36.2612L31.2264 44.8943C31.2145 44.9015 31.2046 44.9119 31.1977 44.9245C31.1908 44.937 31.1872 44.9512 31.1872 44.9657C31.1872 44.9802 31.1908 44.9944 31.1977 45.007C31.2046 45.0195 31.2145 45.0299 31.2264 45.0372L36.9819 48.5168C37.0364 48.5497 37.0329 48.5717 36.9715 48.5827C36.9216 48.5912 36.8562 48.5906 36.775 48.5809C34.5574 48.3086 32.3439 48.0437 30.1344 47.786Z" fill="#FE7024" />
                            <path d="M38.6372 48.4713L33.019 45.0503C33.0049 45.0418 32.9932 45.0295 32.9851 45.0147C32.9769 44.9999 32.9727 44.9831 32.9727 44.966C32.9727 44.9489 32.9769 44.9321 32.9851 44.9174C32.9932 44.9026 33.0049 44.8903 33.019 44.8818L38.6372 41.4608C38.6512 41.452 38.6672 41.4474 38.6836 41.4473C38.6999 41.4472 38.7159 41.4516 38.7301 41.4602C38.7442 41.4688 38.756 41.4811 38.7641 41.496C38.7722 41.5109 38.7764 41.5279 38.7763 41.5451V48.387C38.7764 48.4042 38.7722 48.4211 38.7641 48.4361C38.756 48.451 38.7442 48.4633 38.7301 48.4719C38.7159 48.4805 38.6999 48.4849 38.6836 48.4848C38.6672 48.4847 38.6512 48.48 38.6372 48.4713Z" fill="#FE7024" />
                        </svg>
                        <h3 className="mb-0 text-white">Swap successful !</h3>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default ConnectSwap;