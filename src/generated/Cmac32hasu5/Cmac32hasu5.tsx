
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-mac32hasu5',
  shadow: true,
})
export class Cmac32hasu5 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  