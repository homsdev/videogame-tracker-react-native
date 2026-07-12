import {View, StyleSheet} from "react-native";
import {Button, Modal, Portal, TextInput} from "react-native-paper";
import {useMemo} from "react";
import {GAME_GENRE_OPTIONS, GAME_PLATFORM_OPTIONS} from "../../store/GamesData";
import {useAppTheme} from "../../theme/customTheme";
import DropdownSelector from "../UI/DropdownSelector";
import LabelText from "../UI/LabelText";
import {Controller, useForm} from "react-hook-form";


interface Props {
    visible: boolean;
    onDismiss?: () => void;
}

interface Inputs {
    title: string;
    platform: string;
    genre: string;
    hours: number;
    cost: number;
}


function CreateGameForm({visible, onDismiss}: Readonly<Props>) {


    const {
        control,
        handleSubmit,
        formState: {isValid, errors},
        reset,
    } = useForm<Inputs>({
        defaultValues: {
            title: '',
            platform: '',
            genre: '',
            hours: 0,
            cost: 0,
        }
    });

    const {colors} = useAppTheme();

    const styles = useMemo(() => makeStyles(colors), [colors]);

    const onSubmit = (data: Inputs) => {
        console.log('Form Data:', data);
        console.log('Form Errors:', errors);
        console.log('Form isValid:', isValid);
        reset();
    };

    return <View>
        <Portal>
            <Modal
                visible={visible}
                onDismiss={onDismiss}
                contentContainerStyle={styles.modalContainer}
            >
                <View>
                    {/*Title field */}
                    <View style={styles.formGroup}>
                        <Controller
                            control={control}
                            name="title"
                            rules={{required: "Title is required"}}
                            render={({field: {onChange, value}}) => (
                                <View style={styles.inputGroup}>
                                    <LabelText>Title</LabelText>
                                    <TextInput
                                        placeholder="Game Title ..."
                                        value={value}
                                        onChangeText={onChange}
                                        contentStyle={{color: colors.fontPrimary}}
                                        style={{backgroundColor: colors.backgroundLighter}}/>
                                </View>
                            )}>
                        </Controller>
                    </View>
                    {/*Platform and genre selectors*/}
                    <View style={styles.formGroup}>
                        <Controller
                            control={control}
                            name="platform"
                            rules={{required: 'Platform is required'}}
                            render={({field: {onChange, value}}) => (
                                <View style={[styles.inputGroup, {height: 65}]}>
                                    <LabelText>Platform</LabelText>
                                    <DropdownSelector
                                        data={GAME_PLATFORM_OPTIONS}
                                        labelField='label'
                                        valueField='value'
                                        placeholder=''
                                        onChange={onChange}
                                        value={value}
                                    />
                                </View>
                            )}
                        >
                        </Controller>
                        <Controller
                            control={control}
                            name="genre"
                            rules={{required: 'Genre is required'}}
                            render={({field: {onChange, value}}) => (
                                <View style={[styles.inputGroup, {height: 65}]}>
                                    <LabelText>Genre</LabelText>
                                    <DropdownSelector
                                        data={GAME_GENRE_OPTIONS}
                                        labelField='label'
                                        valueField='value'
                                        placeholder=''
                                        onChange={onChange}
                                        value={value}
                                    />
                                </View>
                            )}
                        >
                        </Controller>
                    </View>
                    {/*Hours and Cost Fields*/}
                    <View style={styles.formGroup}>
                        <Controller
                            control={control}
                            name="hours"
                            rules={{
                                required: "Hours is required"
                            }}
                            render={({field: {onChange, value}}) => (
                                <View style={styles.inputGroup}>
                                    <LabelText>Hours</LabelText>
                                    <TextInput
                                        placeholder="0.0"
                                        value={value.toString()}
                                        onChangeText={(text) => onChange(text === '' ? 0 : Number.parseFloat(text))}
                                        contentStyle={{color: colors.fontPrimary}}
                                        style={{backgroundColor: colors.backgroundLighter}}
                                        keyboardType="decimal-pad"
                                    />
                                </View>
                            )}>
                        </Controller>
                        <Controller
                            control={control}
                            name="cost"
                            rules={{required: "Cost is required"}}
                            render={({field: {onChange, value}}) => (
                                <View style={styles.inputGroup}>
                                    <LabelText>Cost</LabelText>
                                    <TextInput
                                        placeholder="0.0"
                                        value={value.toString()}
                                        onChangeText={(text) => onChange(text === '' ? 0 : Number.parseFloat(text))}
                                        contentStyle={{color: colors.fontPrimary}}
                                        style={{backgroundColor: colors.backgroundLighter}}
                                        keyboardType="decimal-pad"
                                    />
                                </View>
                            )}>
                        </Controller>
                    </View>
                    {/*Submit*/}
                    <View style={{marginTop: 20}}>
                        <Button disabled={!isValid} mode="contained" onPress={handleSubmit(onSubmit)}>ADD GAME</Button>
                    </View>
                </View>
            </Modal>
        </Portal>
    </View>
}

const makeStyles = (colors: ReturnType<typeof useAppTheme>['colors']) => StyleSheet.create({
    modalContainer: {
        backgroundColor: colors.background,
        padding: 20,
        flex: .75
    },
    formGroup: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 20,
    },
    inputGroup: {
        flex: 1,
    }
});

export default CreateGameForm;