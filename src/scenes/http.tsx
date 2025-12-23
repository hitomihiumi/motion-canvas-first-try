import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const title = createRef<Txt>();
    const content = createRef<Rect>();
    const line = createRef<Line>();
    const cs = createRef<Rect>()
    const hack = createRef<Rect>()
    const hackline = createRef<Line>()
    const packet = createRef<Rect>()
    const packet2 = createRef<Rect>()
    const msg = createRef<Rect>()

  view.add(
      <Rect
      ref={window}
      >
          <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'HTTP'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
          />
          <Rect
                layout
                fill={'#242424'}
                padding={12}
                radius={12}
                y={60}
                x={-210}
                ref={packet}
          >
                <Txt
                    fontSize={30}
                    fill={'#ffffff'}
                    text={'POST /login'}
                    fontFamily={'Source Code Pro'}
                />
          </Rect>
          <Rect
              layout
              fill={'#242424'}
              padding={12}
              radius={12}
              y={-100}
              x={140}
              ref={packet2}
          >
              <Txt
                  fontSize={30}
                  fill={'#ffffff'}
                  text={'POST /login'}
                  fontFamily={'Source Code Pro'}
              />
          </Rect>
         <Rect
                ref={content}
                opacity={0}
         >
             <Rect
                 layout
                 gap={48}
                 alignItems={'center'}
                 justifyContent={'center'}
                 ref={cs}
             >
                 <Rect
                     layout
                     direction={'column'}
                     alignItems={'center'}
                 >
                     <Icon
                         icon={'material-symbols:computer-outline'}
                         size={200}
                     />
                     <Txt
                         fontSize={48}
                         fill={'#ffffff'}
                         text={'Client'}
                         fontFamily={'Source Code Pro'}
                     />
                 </Rect>
                 <Line
                     points={[[0, 0], [650, 0]]}
                     stroke={'grey'}
                     lineWidth={10}
                     lineCap={'round'}
                     ref={line}
                 />
                 <Rect
                     layout
                     direction={'column'}
                     alignItems={'center'}
                 >
                     <Icon
                         icon={'material-symbols:globe'}
                         size={200}
                     />
                     <Txt
                         fontSize={48}
                         fill={'#ffffff'}
                         text={'Server'}
                         fontFamily={'Source Code Pro'}
                     />
                 </Rect>
             </Rect>
             <Rect
                 layout
                 direction={'column'}
                 alignItems={'center'}
                 ref={hack}>
                 <Line
                     points={[[0, 300], [0, 0]]}
                     stroke={'grey'}
                     lineWidth={10}
                     lineCap={'round'}
                     ref={hackline}
                 />
                 <Rect
                     layout
                     gap={24}
                     alignItems={'center'}
                 >
                     <Rect
                         layout
                         direction={'column'}
                         alignItems={'center'}
                         position={[0, 0]}
                     >
                         <Icon
                             icon={'material-symbols:skull'}
                             size={200}/>
                         <Txt
                             fontSize={48}
                             fill={'#ffffff'}
                             text={'Hacker'}
                             fontFamily={'Source Code Pro'}
                         />
                     </Rect>
                 </Rect>
             </Rect>
         </Rect>
          <Rect
              padding={20}
              layout
              fill={'#800000'}
              radius={12}
              height={80}
              justifyContent={'center'}
              y={300}
              x={240}
                ref={msg}
          >
              <Txt
                  fontSize={30}
                  fill={'#ffffff'}
                  text={'Pass: 12345'}
                  fontFamily={'Source Code Pro'}
              />
          </Rect>
      </Rect>
  );

  window().opacity(0).scale(0.5);
  hack().opacity(0).y(150);
  hackline().opacity(0);
  packet().opacity(0);
  packet2().opacity(0);
  msg().opacity(0).scale(0.5);

  yield* all(
      window().opacity(1, 0.5),
      window().scale(1, 0.5, easeOutBack)
  )

    yield* waitFor(1);

    yield* all(
        title().scale(0.5, 0.5, easeInBack),
        title().y(-450, 0.5, easeInBack),
    )

    yield* content().opacity(1, 0.5);

  yield* waitFor(0.5);

  yield* line().stroke('lightgreen', 0.5).to('grey', 0.5);

  yield* all(
      cs().y(-150, 0.5),
      hack().opacity(1, 0.5),
      chain(
          hackline().opacity(1, 0.75),
          hackline().stroke('red', 0.5).to('grey', 0.5),
          all(
              packet().opacity(1, 0.5),
              packet().y(-100, 0.5)
          ),
          packet().x(140, 0.5),
          all(
              packet2().opacity(1, 0.5),
              packet2().y(140, 0.5),
          ),
          packet().x(210, 0.2)
      )
  );

    yield* all(
        packet().opacity(0, 0.5),
        packet2().opacity(0, 0.5)
    )

    yield* all(
        msg().opacity(1, 0.5),
        msg().scale(1, 0.5, easeOutBack)
    );

    yield* waitFor(1);

});
