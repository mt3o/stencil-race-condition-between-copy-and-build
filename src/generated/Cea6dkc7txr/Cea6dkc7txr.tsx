
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-ea6dkc7txr',
  shadow: true,
})
export class Cea6dkc7txr {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  