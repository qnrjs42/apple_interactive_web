import { useEffect, useRef, useState } from 'react';

interface ISceneInfo {
  type: 'sticky' | 'normal';
  heightNum: number;
  scrollHeight: number;
  objs: {
    container?: HTMLElement | null;
    messageA?: HTMLElement | null;
    messageB?: HTMLElement | null;
    messageC?: HTMLElement | null;
    canvas?: HTMLCanvasElement;
    context?: CanvasRenderingContext2D;
  };
}

function App() {
  const scrollYRef = useRef<number>(0);

  const [sceneInfo, setSceneInfo] = useState<ISceneInfo[]>([
    {
      // 0
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배 scrollHeight 세팅
      scrollHeight: 0,
      objs: {},
    },
    {
      // 1
      type: 'normal',
      heightNum: 5, // 브라우저 높이의 5배 scrollHeight 세팅
      scrollHeight: 0,
      objs: {},
    },
    {
      // 2
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배 scrollHeight 세팅
      scrollHeight: 0,
      objs: {},
    },
    {
      // 3
      type: 'sticky',
      heightNum: 5, // 브라우저 높이의 5배 scrollHeight 세팅
      scrollHeight: 0,
      objs: {},
    },
  ]);

  const setLayout = (): void => {
    // 각 스크롤 섹션의 높이 세팅
    const newSceneInfo: ISceneInfo[] = sceneInfo.map((scene: ISceneInfo, sceneIndex: number) => {
      scene.scrollHeight = scene.heightNum * window.innerHeight;

      // set scroll section height
      const container: HTMLElement | null = document.getElementById(`scroll-section-${sceneIndex}`);
      container && (container.style.height = `${scene.scrollHeight}px`);

      return {
        ...scene,
        objs: {
          container,
        },
      };
    });

    console.log(newSceneInfo);

    setSceneInfo(newSceneInfo);
  };

  const setScroll = (): void => {
    scrollYRef.current = window.scrollY;

    console.log(scrollYRef.current);
  };

  useEffect(() => {
    setLayout();

    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', setScroll);

    return (): void => {
      window.removeEventListener('resize', setLayout);
      window.removeEventListener('scroll', setScroll);
    };
  }, []);

  return (
    <>
      <div className='container'>
        <nav className='global-nav'>
          <div className='global-nav-links'>
            <a href='#' className='global-nav-item'>
              Rooms
            </a>
            <a href='#' className='global-nav-item'>
              Ideas
            </a>
            <a href='#' className='global-nav-item'>
              Stores
            </a>
            <a href='#' className='global-nav-item'>
              Contact asda
            </a>
          </div>
        </nav>
        <nav className='local-nav'>
          <div className='local-nav-links'>
            <a href='#' className='product-name'>
              AirMug Pro
            </a>
            <a href='#'>개요</a>
            <a href='#'>제품사양</a>
            <a href='#'>구입하기</a>
          </div>
        </nav>
        <section className='scroll-section' id='scroll-section-0'>
          <h1>AirMug Pro</h1>
          <div className='sticky-elem sticky-elem-canvas'>
            {/* <canvas id='video-canvas-0' width='1920' height='1080'></canvas> */}
          </div>
          <div className='sticky-elem main-message a'>
            <p>
              온전히 빠져들게 하는
              <br />
              최고급 세라믹
            </p>
          </div>
          <div className='sticky-elem main-message b'>
            <p>
              주변 맛을 느끼게 해주는
              <br />
              주변 맛 허용 모드
            </p>
          </div>
          <div className='sticky-elem main-message c'>
            <p>
              온종일 편안한
              <br />
              맞춤형 손잡이
            </p>
          </div>
          <div className='sticky-elem main-message d'>
            <p>
              새롭게 입가를
              <br />
              찾아온 매혹
            </p>
          </div>
        </section>
        <section className='scroll-section' id='scroll-section-1'>
          <p className='description'>
            <strong>보통 스크롤 영역</strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae est ipsa minima,
            eligendi error cum vel dolorum pariatur officia facilis ipsam voluptatibus ad quasi
            porro quod quisquam quidem tempora accusantium accusamus, quaerat aliquam velit
            exercitationem incidunt? Id vitae quisquam saepe quasi accusantium tempore enim! Aperiam
            dolorum a vero repellat dolor, inventore ab odit totam molestias expedita? Enim quia
            dolor maiores veniam ea! Quam illo, est incidunt ipsa reiciendis modi quisquam
            reprehenderit fuga velit dolorem odit sequi autem blanditiis, ullam commodi quibusdam.
            Accusamus repellat aperiam quis neque laudantium, dignissimos hic nisi magnam
            praesentium enim beatae sint architecto cum numquam inventore rerum animi sed nostrum
            quae delectus, voluptas molestiae placeat aliquid! Vel quaerat error officiis magnam
            dolorum iste aspernatur at est! Quo, consequuntur? Reiciendis, dolor. Quo at cupiditate
            in iure obcaecati voluptatum vel ea! Ab vel harum facere hic fuga ducimus sapiente
            dolore dolorem, nobis sint perferendis cumque esse! Omnis fugiat sint error laborum
            eveniet labore nam ducimus quisquam in repudiandae impedit excepturi dignissimos tenetur
            libero placeat rerum maxime tempore, aut nihil. Qui, quam? Voluptate fuga possimus
            itaque quas nesciunt iste, facilis mollitia illo qui placeat temporibus inventore
            obcaecati. Recusandae, sequi dignissimos in natus eum maiores dolorem, deleniti nobis
            accusantium, aspernatur beatae.
          </p>
        </section>
        <section className='scroll-section' id='scroll-section-2'>
          <div className='sticky-elem sticky-elem-canvas'>
            {/* <canvas id='video-canvas-1' width='1920' height='1080'></canvas> */}
          </div>
          <div className='sticky-elem main-message a'>
            <p>
              <small>편안한 촉감</small>
              입과 하나 되다
            </p>
          </div>
          <div className='sticky-elem desc-message b'>
            <p>
              편안한 목넘김을 완성하는 디테일한 여러 구성 요소들, 우리는 이를 하나하나 새롭게 살피고
              재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug Pro를 만들었습니다. 입에 뭔가 댔다는
              감각은 어느새 사라지고 오롯이 당신과 음료만 남게 되죠.
            </p>
            <div className='pin'></div>
          </div>
          <div className='sticky-elem desc-message c'>
            <p>
              디자인 앤 퀄리티 오브 스웨덴,
              <br />
              메이드 인 차이나
            </p>
            <div className='pin'></div>
          </div>
        </section>
        <section className='scroll-section' id='scroll-section-3'>
          <p className='mid-message'>
            <strong>Retina 머그</strong>
            <br />
            아이디어를 광활하게 펼칠
            <br />
            아름답고 부드러운 음료 공간.
          </p>
          {/* <canvas className='image-blend-canvas' width='1920' height='1080'></canvas> */}
          <p className='canvas-caption'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet at fuga quae
            perspiciatis veniam impedit et, ratione est optio porro. Incidunt aperiam nemo voluptas
            odit quisquam harum in mollitia. Incidunt minima iusto in corporis, dolores velit.
            Autem, sit dolorum inventore a rerum distinctio vero illo magni possimus temporibus
            dolores neque adipisci, repudiandae repellat. Ducimus accusamus similique quas earum
            laborum. Autem tempora repellendus asperiores illum ex! Velit ea corporis odit? Ea,
            incidunt delectus. Sapiente rerum neque error deleniti quis, et, quibusdam, est autem
            voluptate rem voluptas. Ratione soluta similique harum nihil vel. Quas inventore
            perferendis iusto explicabo animi eos ratione obcaecati.
          </p>
        </section>
        <footer className='footer'>2020, 1분코딩</footer>
      </div>
    </>
  );
}

export default App;
