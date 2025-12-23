import {Circle, Rect, Icon, Line, Grid, makeScene2D, Txt} from '@motion-canvas/2d';
import {all, chain, createRef, easeInBack, easeOutBack, waitFor} from '@motion-canvas/core';

export default makeScene2D(function* (view) {
    const window = createRef<Rect>();
    const content = createRef<Rect>();
    const title = createRef<Txt>();
    const dvBox = createRef<Rect>();
    const ovBox = createRef<Rect>();
    const evBox = createRef<Rect>();

    view.add(
        <Rect
            opacity={0}
            ref={window}
        >
            <Txt
                fontSize={128}
                fill={'#ffffff'}
                text={'SSL Types'}
                fontFamily={'Source Code Pro'}
                fontWeight={600}
                ref={title}
            />
            <Rect
                ref={content}
                opacity={0}
            >
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={dvBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Domain Validation (DV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Validates domain ownership\n- Issued quickly\n- Basic encryption'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={ovBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Organization Validation (OV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Validates organization details\n- Takes longer to issue\n- Stronger trust'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
                <Rect
                    layout
                    fill={'#242424'}
                    padding={24}
                    radius={12}
                    gap={12}
                    direction={'column'}
                    ref={evBox}
                    x={300}
                    y={20}
                    opacity={0}
                >
                    <Txt
                        fontSize={48}
                        fill={'#ffffff'}
                        text={'Extended Validation (EV)'}
                        fontFamily={'Source Code Pro'}
                    />
                    <Txt
                        fontSize={24}
                        fill={'#aaaaaa'}
                        text={'- Rigorous validation process\n- Displays organization name in address bar\n- Highest level of trust'}
                        fontFamily={'Source Code Pro'}
                    />
                </Rect>
            </Rect>
        </Rect>
    );

    window().opacity(0).scale(0.5);

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

    yield* chain(
        all(
            dvBox().opacity(1, 0.5),
            dvBox().x(0, 0.5),
            dvBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            dvBox().x(-400, 0.5),
            dvBox().y(-250, 0.5),
            ovBox().opacity(1, 0.5),
            ovBox().x(0, 0.5),
            ovBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            ovBox().x(400, 0.5),
            ovBox().y(-250, 0.5),
            evBox().opacity(1, 0.5),
            evBox().x(0, 0.5),
            evBox().y(0, 0.5),
        ),
        waitFor(1),
        all(
            dvBox().opacity(0, 0.5),
            ovBox().opacity(0, 0.5),
            evBox().opacity(0, 0.5),
        )
    )
});